module.exports = function(io) {
    io.on("connection", (socket) => {
        console.log("oldu", socket.id);
        socket.on("chat", (data) => {


        });
        setInterval(() => {
            io.sockets.emit("chat", {
                number: Math.random()
            })
        }, 1200);
    })
}