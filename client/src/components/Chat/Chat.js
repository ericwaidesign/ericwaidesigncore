import React from "react";
import io from "socket.io-client";

const event = require('./constants/events');
const config = require('./constants/configs');

class Chat extends React.Component {
    constructor(props) {
        super(props);

        // holds the current values
        this.state = {
            username: '',
            message: '',
            messages: [] // holds all the messages(receive and send)
        };

        let host = io('localhost:9000');
        if (this.socket == null) {
            host = location.origin.replace(/^http/, 'ws')
        }

        this.socket.on(event.RECEIVE_MESSAGE, function(data) {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit(event.SEND_MESSAGE, {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({ message: '' });

        }
    }



    render() {
        return (
            <div className="chat-app-container">
                <div className="chat-app-body">
                    <hr />
                    <div className="messages">
                        {this.state.messages.map(message => {
                            return (
                                <div>{message.author}: {message.message}</div>
                            )
                        })}
                    </div>
                </div>

                <div className="chat-app-footer">
                    <input
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={ev => this.setState({ username: ev.target.value })}
                        className="" />
                    <br />
                    <input
                        type="text"
                        placeholder="Message"
                        className=""
                        value={this.state.message}
                        onChange={ev => this.setState({ message: ev.target.value })} />
                    <br />
                    <button onClick={this.sendMessage} className="">Send</button>
                </div>
            </div>
        );
    }
}

export default Chat;