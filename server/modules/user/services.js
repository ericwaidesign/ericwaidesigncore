'user strict'

const User = require('./model');

exports.createUser = (name, email) => {
    const user = new User({
        name: name,
        email: email
    })
    user.save((err) => {
        if (err) {
            return err;
        }
    });
}

exports.getUserById = (id) => {
    User.findById(id, (err, user) => {
        return user;
    });
}

exports.getUserByEmail = (email) => {
    User.findOne({ email: email })
        .then((err, user) => {
            return user;
        });
}