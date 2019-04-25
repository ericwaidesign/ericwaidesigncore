"use strict"

const chalk = require('chalk');

const {
    COMMUNITY_CHAT,
    LOGOUT,
    MESSAGE_RECEIVED,
    MESSAGE_SENT,
    PRIVATE_MESSAGE,
    TYPING,
    USER_CONNECTED,
    USER_DISCONNECTED,
    VERIFY_USER
} = require("./constants/events");

const {} = require

let connectedUsers = {};
let communityChat = createChat();

/**
 * 
 */
exports.init = (io) => {

    io.on("connection", socket => {

        socket.on(VERIFY_USER, (username, callback) => {
            if(isUser()) {
                
            }
        });

    });

}

// isUser(userList, )
