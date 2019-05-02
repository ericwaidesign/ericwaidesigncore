"use strict"

const users = [];
const WebSocket = require('ws');

/**
 * Use the native WebSocket object in the browser, wphich is widely
 * supported and "ws" WebSocket library on the server.
 */
exports.init = (webSocketServer) => {

    const broadcast = (data, webSocket) => {
        webSocketServer.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client !== webSocket) {
                console.log('broadcast: send data author: ' + data.author + ', data message: ' + data.message);
                client.send(JSON.stringify(data))
            }
        });
    }

    /**
     * @description Through socket, listen for any connections to the server
     */
    webSocketServer.on("connection", webSocket => {
        let index;
        webSocket.on("message", message => {
            const data = JSON.parse(message);
            console.log(message);

            switch (data.type) {

                /**
                 * @description Add user event, "ADD_USER".
                 * When client establishes the connection, send an ADD_USER event
                 * with the name, add it to the server-side list of users, and issue
                 * a broadcast to the "users_list" for all the connected clients.
                 */
                case 'ADD_USER': {
                    console.log('socket-manager: ADD_USER');
                    index = users.length;
                    console.log('socket-manager: ADD_USER: ' + index);
                    users.push({ name: data.name, id: index + 1 });
                    webSocket.send(JSON.stringify({
                        type: 'USERS_LIST',
                        users
                    }));

                    // broadcast the ADD_MESSAGE event to all connected clients
                    broadcast({
                        type: 'USERS_LIST',
                        users
                    }, webSocket)
                    break
                }

                /**
                 * @description Add message event, "ADD_MESSAGE".
                 * When an "ADD_MESSAGE" event is sent, broadcast it to all connected
                 * clients
                 */
                case 'ADD_MESSAGE':
                    console.log('socket-manager: ADD_MESSAGE');
                    broadcast({
                        type: 'ADD_MESSAGE',
                        message: data.message,
                        author: data.author
                    }, webSocket)
                    break
                default:
                    break
            }
        });

        /**
         * @description On connection close, remove the user name from
         * the list and broadcast the new users list.
         */
        webSocket.on('close', () => {
            console.log('socket-manager: close');
            users.splice(index, 1)
            broadcast({
                type: 'USERS_LIST',
                users
            }, webSocket)
        });
    });
};