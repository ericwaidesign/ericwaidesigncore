/**
 * @description The socket.io methods that handles all the events of the
 * Chat component. These events include users connection states and messages.
 * The socket.io mechanism is based on listening and firing events.
 */
exports.init = (io) => {
    // detect user connected to the server
    io.on("connection", socket => {
        console.log("user connected");

        /**
         * @description Listener for the event "join" emitted by the client.
         */
        socket.on("join", username => {
            console.log(
                chalk`{green {green.bold username} has joined the chat}`
            );

            // broadcast to all users
            socket.broadcast.emit("userjoinedthechat", username + " : has joined the chat");
        });

        /**
         * @description Listener for the event "messagedetection" emitted by the
         * client.
         */
        socket.on("messagedetection", (username, message) => {
            console.log(
                username + ": " + message
            );

            const message = { "message" : message, "senderUsername" : username };

            // send the message to the client
            socket.emit("message", message);
        });

        /**
         * @description Listener for the event "disconnect" emitted by the client
         * when disconnect from the client side.
         */
        socket.on("disconnect", () => {
            console.log("user has left");

            // broadcast to all users
            socket.broadcast.emit("userdisconnect", "user has left");
        });

        socket.on("subscribe", data => {
            room = data.room;
            socket.join(room);
            console.log("joined room", room);
        });

        socket.on("unsubscribe", () => {
            console.log("leaving room", room);
        });

        socket.on("disconnect", () => {
            console.log("a user disconnected");
        });

        socket.on("chat message", msg => {
            console.log("sending message to", msg.room);
            console.log("this message", msg);
            const message = new Message({
                user: msg.user,
                content: msg.message,
                room: msg.room
            });

            message.save(err => {
                if (err) {
                    return err;
                }
            });

            io.to(msg.room)
                .emit("chat message", JSON.stringify(msg));
        });

        socket.on("new room", msg => {
            const message = new Message({
                user: roomData.user,
                content: roomData.message,
                room: roomData.room
            });
            message.save(err => {
                if(err) {
                    return err;
                }
            });
        });
    });
}