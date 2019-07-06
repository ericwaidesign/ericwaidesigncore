import React, { Component } from 'react';

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Enter your message."
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //
        event.preventDefault();
    }

    addMessage() {

    } 

    render() {
        return (
            <div id="chatAppContainer">
                <form onSubmit={this.handleSubmit}>
                    <textarea id="chatAppMessage" value={this.state.value} onChange={this.handleChange} />

                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default ChatApp;