'user strict'

const Message = require('./model');

exports.postMessage = function (data, res) {
    let message = createMessage(data.author, data.message);

    message.save((err) => {
        if (err) {
            sendStatus(500);
        }
        res.sendStatus(200);
    })
}

/**
 * @description
 * @param {String} author - User Schema.ObjectId
 * @param {String} content - content of the Message
 */
function createMessage(author, message) {
    const message = new Message({
        author: author,
        content: content
    });

    return message;
}