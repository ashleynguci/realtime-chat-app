let currentMessageId = 1;
const createMessage = (user, messageText) => {
    return {
        _id: currentMessageId++,
        text: messageText,
        createdAt: new Date(),
        user: {
            _id: user.userId,
            name: user.username,
            avatar: user.avatar,
        }
    }
}
const handleMessage = (socket, users) => {
    socket.on("message", textMessage => {
        const user = users[socket.id];
        const message = createMessage(user, textMessage);
        socket.broadcast.emit("message", message);

    })
}

module.exports = { handleMessage };