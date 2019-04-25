const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
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
const User = mongoose.model("User", UserSchema);

// make this available to the app
module.exports = User;