import React, { Component } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import "../../assets/scss/main.scss";
import isEmpty from "../../utils/is-empty";
import { getCurrentProfile } from "../../actions/profileActions";
import { sendMessage, getMessages } from "../../actions/chatActions";
import dateToTime from "../../utils/dateToTime";

import CreateProfile from "../Profile/CreateProfile";

import ChatAvatar from "./ChatAvatar";

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

      const newMessage = {
        content: this.state.message,
        author: this.props.profile.profile.handle,
        user: this.props.auth.user.id,
        date: new Date()
      };
      this.props.sendMessage(newMessage);

      console.log(this.state.messages);
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getMessages();
  }

  sendMessage = ev => {
    ev.preventDefault();
    if (this.state.message) {
      this.socket.emit("SEND_MESSAGE", {
        content: this.state.message,
        author: this.props.profile.profile.handle,
        user: this.props.auth.user.id,
        date: new Date()
      });

      this.setState({ message: "" });
    }
  };
  toggleCreatingProfile = () =>
    this.setState({ creatingProfile: !this.state.creatingProfile });

  render() {
    const { profile, toggleShow } = this.props;
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
                        <ChatAvatar
                          avatar={this.props.profile.profile.avatar}
                        />
                        {message.author}
                      </span>{" "}
                      <span className="Chat__message--time">({time})</span>
                    </div>
                    :
                    <div className="Chat__message--content">
                      &nbsp;{message.content}
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
                  onClick={() => toggleShow("CreateProfile")}
                  className="Sidebar__back"
                >
                  <i className="fa fa-arrow-left Sidebar__back--icon" />
                  back
                </button>
                <CreateProfile toggleShow={this.props.toggleShow} />
              </div>
            ) : (
              <div className="Chat__profile">
                {!profile.loading && (
                  <button
                    className="Chat__profile--button"
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
  profile: state.profile,
  messages: state.chat.messages
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, sendMessage, getMessages }
)(Chat);
