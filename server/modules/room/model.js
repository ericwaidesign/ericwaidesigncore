const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
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