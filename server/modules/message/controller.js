const Message = require("./model");

exports.getMessages = function (req, res) {
    Message.find({}, (err, messages) => {
        res.send(messages);
    });
}

exports.postMessage = function (req, res) {
    let message = createMessage(req.body.name, req.body.message);

    message.save((err) => {
        if (err) {
            sendStatus(500);
        }
        res.sendStatus(200);
    })
}

function createMessage(name, message) {
    const messageObj = new Message({
        name: name,
        message: message
    });

    return messageObj;
}