const Room = require("./model");
const Message = require("../message/model");

exports.getRoomById = (id) => {
    Room.findById(id, (err, room) => {
        return room;
    });
}


exports.addMessageToRoom = (id, message) => {
    const room = getRoomById(id);
    if (room) {
        room.messages.push(message);
    }
}

exports.addUserToRoom = (id, user) => {
    const room = getRoomById(id);
    if (room) {
        room.users.push(user);
    }
}

exports.createRoom = (name) => {
    const room = new Room(
        { name: req.body.name }
    )
    room.save((err) => {
        if (err) {
            return err;
        }
    });
}