const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    author: {
        type: Schema.ObjectId,
        ref: 'User',
        require: true
    },
    content: {
        type: String,
        require: true
    },
    room: {
        type: Schema.ObjectId,
        ref: 'Room',
        require: true
    },
    _id: {
        type: Schema.ObjectId,
        auto: true
    }
},
    {
        timestamps: true
    });

// create model using the schema
const Message = mongoose.model("Message", MessageSchema);

// make this available to the app
module.exports = Message;