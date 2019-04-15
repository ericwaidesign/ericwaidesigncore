"use strict"

/**
 * Use the native WebSocket object in the browser, which is widely
 * supported and "ws" WebSocket library on the server.
 */
exports.init = (wss) => {

    const users = [];

    const broadcast = (data, ws) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client !== ws) {
                client.send(JSON.stringify(data))
            }
        });
    }

    /**
     * @description Accept connection
     */
    wss.on("connection", ws => {
        let index;
        ws.on("message", message => {
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
                    index = users.length
                    users.push({ name: data.name, id: index + 1 })
                    ws.send(JSON.stringify({
                        type: 'USERS_LIST',
                        users
                    }));

                    // broadcast the ADD_MESSAGE event to all connected clients
                    broadcast({
                        type: 'USERS_LIST',
                        users
                    }, ws)
                    break
                }

                /**
                 * @description Add message event, "ADD_MESSAGE".
                 * When an "ADD_MESSAGE" event is sent, broadcast it to all connected
                 * clients
                 */
                case 'ADD_MESSAGE':
                    broadcast({
                        type: 'ADD_MESSAGE',
                        message: data.message,
                        author: data.author
                    }, ws)
                    break
                default:
                    break
            }
        });

        /**
         * @description On connection close, remove the user naem from
         * the list and broadcast the new users list.
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