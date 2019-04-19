import React, { Component } from 'react';
import io from "socket.io-client";

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            message: "",
            message: []
        }

        this.socket = io(document.location.href);
        this.socket.on("RECEIVE_MESSAGE", data => {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.message, data]});
            console.log(this.state.messages);
        }

        this.sendMessage = event => {
            // if the event does not get explicitly handled its default action
            //  should not be taken as it normally would be. The event continues
            //  to propagate as usual.
            event.preventDefault();
            this.socket.emit("SEND_MESSAGE", {
                author: this.state.username,
                message: this.state.messsge
            });
            this.setState({message: ""});
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}