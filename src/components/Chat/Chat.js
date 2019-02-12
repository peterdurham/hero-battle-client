import React, { Component } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import "../../assets/scss/main.scss";
import isEmpty from "../../utils/is-empty";
import { getCurrentProfile } from "../../actions/profileActions";
import dateToTime from "../../utils/dateToTime";

import CreateProfile from "../Profile/CreateProfile";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: []
    };

    this.socket = io("localhost:5000");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };
  }

  sendMessage = ev => {
    ev.preventDefault();
    if (this.state.message) {
      this.socket.emit("SEND_MESSAGE", {
        author: this.props.profile.profile.handle,
        message: this.state.message
      });
      this.setState({ message: "" });
    }
  };
  toggleCreatingProfile = () =>
    this.setState({ creatingProfile: !this.state.creatingProfile });

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { profile } = this.props;
    const time = dateToTime(new Date());

    return (
      <div>
        {!isEmpty(profile.profile) ? (
          <div className="Chat">
            <div className="Chat__header">Global Chat</div>
            {/* <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={ev => this.setState({ username: ev.target.value })}
            /> */}

            <hr />
            <div className="Chat__messages">
              <div className="Chat__welcome">
                Welcome to the chat{" "}
                <span className="Chat__welcome--handle">
                  {profile.profile.handle}
                </span>
              </div>
              {this.state.messages.map((message, index) => {
                return (
                  <div className="Chat__message" key={index}>
                    <div className="Chat__message--info">
                      <span className="Chat__message--author">
                        {message.author}
                      </span>{" "}
                      <span className="Chat__message--time">({time})</span>
                    </div>
                    :
                    <div className="Chat__message--content">
                      &nbsp;{message.message}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="Chat__inputs">
              <textarea
                type="text"
                placeholder="Message"
                value={this.state.message}
                onChange={ev => this.setState({ message: ev.target.value })}
                className="Chat__input"
                rows="2"
              />
              <br />
              <button className="Chat__submit" onClick={this.sendMessage}>
                Send
              </button>
            </div>
          </div>
        ) : (
          <div>
            {this.props.showCreateProfile ? (
              <div>
                <button
                  onClick={this.toggleCreatingProfile}
                  className="Sidebar__back"
                >
                  <i className="fa fa-arrow-left Sidebar__back--icon" />
                  back
                </button>
                <CreateProfile toggleShow={this.props.toggleShow} />
              </div>
            ) : (
              <div>
                {!profile.loading && (
                  <button
                    className="Chat__enter"
                    onClick={() => this.props.toggleShow("CreateProfile")}
                  >
                    Create Profile
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Chat);
