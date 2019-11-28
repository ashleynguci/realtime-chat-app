const io = require("socket.io")();

io.on("connection", function () {
    console.log("connected");
})
io.listen(3001);