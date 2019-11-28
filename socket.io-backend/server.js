const io = require("socket.io")();
let currentUserId = 2;
const messageHandler = require("./handlers/message.handlers");

const userIds = {};


io.on("connection", socket => {
    console.log("connected");
    console.log(socket.id);
    userIds[socket.id] = currentUserId++;
    messageHandler.handleMessage(socket, userIds)
})
io.listen(3001);