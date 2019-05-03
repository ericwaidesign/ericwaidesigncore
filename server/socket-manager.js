'use strict'

// const users = [];
const WebSocket = require('ws');
const userServices = require('./modules/user/services');
const roomServices = require('./modules/room/services');
const messageServices = require('./modules/message/services');
const events = require('./constants/events');

/**
 * @description
 */
exports.init = (wss) => {

    /**
     * @description
     */
    wss.on('connection', ws => {

        let index;

        /**
         * @description
         */
        ws.on('message', (message) => {
            const data = JSON.parse(message);
            console.log(message);

            switch (data.type) {
                case events.ADD_USER_TO_ROOM: {
                    addUserToRoom(data, ws);
                    break;
                }
                case events.ADD_MESSAGE:
                    addMessage(data, ws);
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

    /////////////////////////////////////////////////////////////////////

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
    const addUserToRoom = (event, data, ws) => {
        const user = userServices.getUserByEmail(data.user.email);
        if (!user) {
            user = userServices.createUser(data.user.name, data.user.email);
        }
        roomServices.addUserToRoom(data.room.id, user);
        const users = roomServices.getUsersByRoomId(data.room.id);

        // ws.send(
        //     JSON.stringify({
        //         type: 'USERS_LIST',
        //         users
        //     })
        // );

        broadcast({
            type: event,
            users
        }, ws);
    }

    /** 
     * @description
     */
    const addMessage = (event, data, ws) => {
        const message = messageServices.createMessage();
        roomServices.addMessageToRoom(data.room.id, message);
        
        broadcast({
            type: event,
            message: message.content,
            author: message.user
        }, ws)
    }
};