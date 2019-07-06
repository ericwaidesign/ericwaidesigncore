const Message = require("./model");
const messageService = require("./utils");

exports.getMessages = function (req, res) {
    Message.find({}, (err, messages) => {
        res.send(messages);
    });
}

exports.postMessage = function (req, res) {
    let message = createMessage(req.author, req.message);

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