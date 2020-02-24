const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    message: {
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