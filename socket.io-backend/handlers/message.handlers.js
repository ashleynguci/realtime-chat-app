let currentMessageId = 1;
function createMessage(userId, messageText) {
    return {
        _id: currentMessageId++,
        text: messageText,
        createdAt: new Date(),
        user: {
            _id: userId,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        }
    }
}
function handleMessage(socket, userIds) {
    socket.on("message", textMessage => {

        const userId = userIds[socket.id];
        const message = createMessage(userId, textMessage)
        console.log(message);
        socket.broadcast.emit("message", message)

    })
}

module.exports = { handleMessage }