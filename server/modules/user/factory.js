const User = require("./model");

const createUser = email => {
    User.create(email);
}

module.exports = {
    createUser
}