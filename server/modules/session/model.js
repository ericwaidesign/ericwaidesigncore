const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SessionSchema = new mongoose.Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User',
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
const Session = mongoose.model("Session", SessionSchema);

// make this available to the app
module.exports = Session;