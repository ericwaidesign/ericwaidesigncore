const event = require('../constants/events');

/**
 * @description
 */
exports.init = (io) => {

    /**
     * @description
     */
    io.on('connection', (client) => {

        console.log("New client connected");

        /**
         * @param event
         * @param callback
         */
        client.on(event.message, (data) => {
            const req = messageUtils.createReq(data.author, data.message);
            messageController.postMessage(req, res);
        });

        client.on(event.DISCONNECT, () => {
            console.log("Client disconnected");
        });

    });

};