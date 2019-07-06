const userController = require('../modules/user/controller');
const User = require('./model');

exports.setUserNameToReq = function (userName) {
    let req = {
        param: {
            name: userName
        }
    }

    return req;
}

exports.getUserByName = function(userName) {
    let req = setUserNameToReq(userName);
    let user = userController.getUserByName();
    return user;
}