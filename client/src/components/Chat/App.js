import React, { Component } from "react";
import "./assets/css/index.css";

class ChatApp extends Component {
    render() {
        return (
            <div id="container">
                <aside id="sidebar">Users</aside>
                <section id="main">
                    <section id="messages-list">Messages list</section>
                    <section id="new-message">New message</section>
                </section>
            </div>
        );
    }
}

export default ChatApp;