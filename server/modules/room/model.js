const mongoose = require("mongoose");
const Message = require("Message");

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: Schema.ObjectId,
        ref: 'Message'
    }],
    _id: {
        type: Schema.ObjectId,
        auto: true
    }
},
    {
        timestamps: true
    });

// create model using the schema
const Room = mongoose.model("Room", RoomSchema);

// make this available to the app
module.exports = Room;