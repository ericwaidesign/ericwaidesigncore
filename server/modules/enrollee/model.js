const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnrolleeSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    version: {
        type: Number,
        require: true
    },
    insuranceCompany: {
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
const Enrollee = mongoose.model("Enrollee", EnrolleeSchema);

// make this available to the app
module.exports = Enrollee;