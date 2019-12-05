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
    socket.on("join", username => {
        users[socket.id].username = username;
        users[socket.id].avatar = createUserAvatar();
        messageHandler.handleMessage(socket, users);
    });
    socket.on("disconnect", () => {
        delete users[socket.id];
        io.emit("action", { type: "online_List", data: createUserOnline() })
    })
    socket.on("action", action => {
        switch (action.type) {
            case "server/hello":
                console.log("Got hello event", action.data);
                socket.emit("action", { type: "message", data: "Good day!" });
                break;
            case "server/join":
                console.log("Got signin event", action.data);
                users[socket.id].username = action.data;
                users[socket.id].avatar = createUserAvatar();
                io.emit("action", { type: "online_List", data: createUserOnline() })
                break;
            case "server/private-message":
                console.log("got", action.data);
        }
    })

})
io.listen(3001);