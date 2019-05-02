const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    user: {
        type: Schema.ObjectId,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    room: {
        type: String,
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