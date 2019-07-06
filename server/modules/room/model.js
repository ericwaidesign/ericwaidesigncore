const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new mongoose.Schema({
    name: {
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
const Room = mongoose.model("Room", RoomSchema);

// make this available to the app
module.exports = Room;