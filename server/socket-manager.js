'use strict'

const users = [];
const WebSocket = require('ws');
const UserController = require('./modules/user/controller');
const events = require('./constants/events');

/**
 * @description
 */
exports.init = (wss) => {

    /**
     * @description
     */
    const broadcast = (data, ws) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client !== ws) {
                client.send(JSON.stringify(data));
            }
        });
    }

    /**
     * @description
     */
    const addUser = (data, ws) => {
        // index = users.length
        // users.push({ name: data.name, id: index + 1 })
        // data.email;

        ws.send(
            JSON.stringify({
                type: 'USERS_LIST',
                users
            })
        );

        broadcast({
            type: 'USERS_LIST',
            users
        }, ws);
    }

    /** 
     * @description
     */
    const addMessage = (data, ws) => {
        broadcast({
            type: events.ADD_MESSAGE,
            message: data.message,
            author: data.author
        }, ws)
    }

    /**
     * @description
     */
    wss.on("connection", ws => {

        let index;

        /**
         * @description
         */
        ws.on('message', (message) => {
            const data = JSON.parse(message);
            console.log(message);

            switch (data.type) {
                case events.ADD_USER: {
                    addUser(data, ws);
                    break;
                }

                case events.ADD_MESSAGE:
                    broadcast({
                        type: events.ADD_MESSAGE,
                        message: data.message,
                        author: data.author
                    }, ws)
                    break;
                default:
                    break;
            }
        });

        /**
         * @description
         */
        ws.on('close', () => {
            users.splice(index, 1)
            broadcast({
                type: 'USERS_LIST',
                users
            }, ws)
        });
    });
};