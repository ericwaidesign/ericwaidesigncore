const User = require('./model');
const util = require('../../utils/general');

const getUser = (email) => {
    const retrievedUser = searchUser(email);
    if (util.isNullOrEmpty(retrievedUser)) {
        return createUser(email);
    } else {
        return retrievedUser;
    }
}

/**
 *
 */
const createUser = (email) => {
    return new User({
        email: email
    });
}

/**
 *
 */
const searchUser = email => {
    return User.findOne({ email: email });
}

module.exports = {
    createUser,
    searchUser
}