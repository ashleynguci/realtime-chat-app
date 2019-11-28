const io = require("socket.io")();
let currentUserId = 2;
let currentMessageId = 1;
const userIds = {};

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
io.on("connection", socket => {
    console.log("connected");
    console.log(socket.id);
    userIds[socket.id] = currentUserId++;
    socket.on("message", textMessage => {

        const userId = userIds[socket.id];
        const message = createMessage(userId, textMessage)
        console.log(message);
        socket.broadcast.emit("message", message)

    })
})
io.listen(3001);