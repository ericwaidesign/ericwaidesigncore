const Room = require("./model");

exports.getRooms = (req, res, next) => {
    Room.find({}, () => {
        console.log("docs", docs);
        res.json(docs);
    });
}

exports.createRoom = (req, res) => {
    const message = new Message({
        user: req.body.messages[0].user,
        content: req.body.messages[0].content,
        room: req.body.title
    })
    console.log("message", message);
    message.save(err => {
        if(err) {
            return err;
        }
    });

    const room = new Room({title: req.body.title});
    room.save((err) => {
        if(err) {
            return err;
        }
    });

    res.json(message);
}