import React, { Component } from "react";
import { connect } from "react-redux";
import KeyboardEventHandler from "react-keyboard-event-handler";
import io from "socket.io-client";
import "../../assets/scss/main.scss";
import PropTypes from "prop-types";
import isEmpty from "../../utils/is-empty";
import { getCurrentProfile } from "../../actions/profileActions";
import { logoutUser } from "../../actions/authActions";
import {
  sendMessage,
  getMessages,
  addMessage
} from "../../actions/chatActions";
import CreateProfile from "../CreateProfile/CreateProfile";
import ChatAvatar from "./ChatAvatar";

const URL = "https://safe-mesa-80973.herokuapp.com";
// const URL = "";
class Chat extends Component {
  state = {
    username: "",
    message: "",
    messages: []
  };

  componentDidMount() {
    this.socket = io(URL);

    // INCOMING WEBSOCKETS DATA
    // this.socket.on("RECEIVE_MESSAGE", function(data) {

    // });

    this.props.getCurrentProfile();
    this.props.getMessages();
  }
  componentDidUpdate = (nextProps, prevProps) => {
    if (
      this.props.messages.length !== nextProps.messages.length &&
      !isEmpty(this.props.profile.profile)
    ) {
      var elem = document.getElementById("Commentbox");
      elem.scrollTop = elem.scrollHeight;
    }
  };

  sendMessage = ev => {
    ev.preventDefault();
    const { message } = this.state;

    const date = new Date();
    const localDate = date.toLocaleString();

    const newMessage = {
      content: message,
      author: this.props.profile.profile.handle,
      avatar: this.props.profile.profile.avatar,
      user: this.props.auth.user.id,
      date: localDate
    };

    if (message && message.length > 2) {
      this.socket.emit("SEND_MESSAGE", newMessage);
      this.props.sendMessage(newMessage);
      this.setState({ message: "" });
    }
  };
  toggleCreatingProfile = () =>
    this.setState({ creatingProfile: !this.state.creatingProfile });

  keyPress = key => {
    if (document.activeElement.nodeName === "TEXTAREA") {
      this.sendMessage();
    }
  };

  render() {
    const { profile, toggleShow } = this.props;

    return (
      <div>
        {!isEmpty(profile.profile) ? (
          <div className="Chat">
            <div className="Chat__header">Chat</div>
            <hr />
            <div id="Commentbox">
              <div className="Chat__welcome">
                Welcome to the chat{" "}
                <span className="Chat__welcome--handle">
                  {profile.profile.handle}
                </span>
              </div>
              <div className="Chat__message">
                {this.props.messages.map((message, index) => {
                  return (
                    <div className="Chat__message" key={index}>
                      <div className="Chat__message--info">
                        <span className="Chat__message--author">
                          <ChatAvatar avatar={message.avatar} />
                          {message.author}
                        </span>{" "}
                        <span className="Chat__message--time">
                          ({message.date})
                        </span>
                      </div>
                      :
                      <div className="Chat__message--content">
                        &nbsp;{message.content}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="Chat__inputs">
              <KeyboardEventHandler
                handleKeys={["enter"]}
                onKeyEvent={(key, e) => this.keyPress(key)}
              >
                <textarea
                  type="text"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={ev => this.setState({ message: ev.target.value })}
                  className="Chat__input"
                  rows="2"
                />
              </KeyboardEventHandler>
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
                  <div className="Chat__profile--buttons">
                    <div className="Chat__profile--signup">
                      You can now vote on 4 hero battles per day!
                    </div>
                    <div className="Chat__profile--message">
                      Create a profile to join chat, collect trophies, and
                      suggest new heroes
                    </div>
                    <br />
                    <button
                      className="Chat__profile--button"
                      onClick={() => this.props.toggleShow("CreateProfile")}
                    >
                      Create Profile
                    </button>
                    <br />
                    <br />
                    <button
                      className="Chat__profile--button"
                      onClick={this.props.logoutUser}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
Chat.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  messages: state.chat.messages
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, sendMessage, getMessages, addMessage, logoutUser }
)(Chat);
