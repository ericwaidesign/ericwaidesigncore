const Message = require("./model");

exports.getMessage = (req, res) => {
    Message.find({ room: room }, (err, docs) => {
        res.json(docs);
    });
}