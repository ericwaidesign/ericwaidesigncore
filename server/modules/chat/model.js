const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    messages,
    users,
    typingUsers,
    _id: {
        type: Schema.ObjectId,
        auto: true
    }
},
    {
        timestamps: true
    });

// create model using the schema
const Chat = mongoose.model("Chat", ChatSchema);

// make this available to the app
module.exports = Chat;