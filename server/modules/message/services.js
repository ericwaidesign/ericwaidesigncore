'user strict'

const Message = require('./model');

/**
 * @description
 * @param {String} author - User Schema.ObjectId
 * @param {String} content - content of the Message
 * @param {String} room - Room Schema.ObjectId
 */
exports.createMessage = (author, content, room) => {
    const message = new Message({
        author: author,
        content: content,
        room: room
    })
    message.save((err) => {
        if (err) {
            return err;
        } else {
            return message;
        }
    });
}