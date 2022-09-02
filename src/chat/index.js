// socket
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send-message", (message, room, sender) => {
    const time = new Date().toString();
    axios
      .post("https://api-studymate.herokuapp.com/api/create-pesan", {
        pesan: message,
        sender: sender,
        roomId: room,
        date: time.substring(4, 24),
      })
      .then((res) => {
        io.to(room).emit("receive-message", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  socket.on("join-room", (room) => {
    socket.join(room);
  });
});

const { default: axios } = require("axios");

server.listen(process.env.PORT, () => {
  console.log("server is running");
});
