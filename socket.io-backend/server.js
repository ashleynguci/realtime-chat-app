const io = require("socket.io")();

io.on("connection", () => {
    console.log("connected");
})
io.listen(3001);