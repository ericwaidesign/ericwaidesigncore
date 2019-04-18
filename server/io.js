exports.init = (io) => {
    io.on("connection", socket => {
        console.log("user connected");

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