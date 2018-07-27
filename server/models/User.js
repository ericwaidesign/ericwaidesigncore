// Invoke 'strict' JavaScript mode
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Owner', 'User'],
        default: 'User'
    }
}, {
    timestamps: true
});

/**
 * 'pre', runs before the object is saved to the DB. The user
 * password is hashed using bcrypt before storing it. 
 */
UserSchema.pre('save', function (next) {
    var user = this;
    var SALT_FACTOR = 10;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
