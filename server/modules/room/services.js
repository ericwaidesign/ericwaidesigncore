'user strict'

const Room = require("./model");
const Message = require("../message/model");

exports.getRoomById = (id) => {
    Room.findById(id, (err, room) => {
        return room;
    });
}

exports.getUsersByRoomId = (roomId) => {
    Room.findById(id, (err, room) => {
        return room.users;
    });
}

exports.addMessageToRoom = (id, message) => {
    const room = getRoomById(id);
    if (room) {
        room.messages.push(message);
    }
}

exports.addUserToRoom = (roomId, user) => {
    const room = getRoomById(roomId);
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