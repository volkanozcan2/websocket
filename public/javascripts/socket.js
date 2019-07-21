var address = document.getElementById("address").innerHTML;
var socket = io.connect(address);
setInterval(() => {
    socket.emit("chat", {
        message: "naber"
    })
}, 1200)
let p = document.getElementById("ws");
socket.on("chat", (data) => {

    p.innerHTML = data.number;
})