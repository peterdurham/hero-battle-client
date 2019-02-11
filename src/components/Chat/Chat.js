import React, { Component } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import "../../assets/scss/main.scss";

import { getCurrentProfile } from "../../actions/profileActions";

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

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        author: this.state.username,
        message: this.state.message
      });
      this.setState({ message: "" });
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return (
      <div className="Chat">
        <div className="Chat__header">Global Chat</div>
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={ev => this.setState({ username: ev.target.value })}
        />
        <br />
        <hr />
        <div className="Chat__messages">
          <div className="Chat__welcome">Welcome to the chat room</div>
          {this.state.messages.map(message => {
            return (
              <div className="Chat__message">
                <div className="Chat__message--author">{message.author}</div>:
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
          />
          <br />
          <button className="Chat__submit" onClick={this.sendMessage}>
            Send
          </button>
        </div>
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
