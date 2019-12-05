const io = require("socket.io")();
const messageHandler = require("./handlers/message.handlers");
const uuidv1 = require("uuid/v1");
const users = {};


const createUserAvatar = () => {
    const ran1 = Math.round(Math.random() * 200 + 100);
    const ran2 = Math.round(Math.random() * 200 + 100);
    return `https://placeimg.com/${ran1}/${ran2}/any`
};
const createUserOnline = () => {
    const values = Object.values(users);
    const usernameFilter = values.filter(u => u.username !== undefined);
    return usernameFilter;
}

io.on("connection", socket => {
    console.log("a user connected");
    console.log(socket.id);
    users[socket.id] = { userId: uuidv1() };

    socket.on("disconnect", () => {
        delete users[socket.id];
        io.emit("action", { type: "online_List", data: createUserOnline() })
    })
    socket.on("action", action => {
        switch (action.type) {
            case "server/join":
                users[socket.id].username = action.data;
                users[socket.id].avatar = createUserAvatar();
                io.emit("action", { type: "online_List", data: createUserOnline() });
                socket.emit("action", { type: "self_user", data: users[socket.id] })
                break;
            case "server/private_message":
                const conversationId = action.data.conversationId;
                const from = users[socket.id].userId;
                const userValues = Object.values(users);
                const socketIds = Object.keys(users);
                for (let i = 0; i < userValues.length; i++) {
                    if (userValues[i].userId === conversationId) {
                        const socketId = socketIds[i];
                        io.sockets.sockets[socketId].emit("action", {
                            type: "private_message", data: {
                                ...action.data, conversationId: from
                            }
                        })
                        break;
                    }
                }
                break;

        }
    })

})
io.listen(3001);