const io = require('socket.io-client');
const event = require('./constants/events');

export default function () {

    const socket = io.connect('http://localhost:9000');

    socket.on(event.ERROR, function (exception) {
        console.log("SOCKET ERROR");
        socket.destroy();
    })

    function message(message) {
        socket.emit(event.MESSAGE, { message: message });
    }

    return {
        message
    }

}
