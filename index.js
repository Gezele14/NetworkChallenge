const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 5001;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + `/home.html`);
});

io.on("connection", (socket) => {
  socket.on("Message", (msg) => {
    io.emit("Message", msg);
  });
});

http.listen(PORT, () => {
  console.log(`listening on ${PORT}` );
});
