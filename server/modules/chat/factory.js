const Chat = require("./model");

const createChat = () => {
    Chat.create();
}

module.exports = {
    createChat
}