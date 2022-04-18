import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const PORT = process.env.PORT || 4000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", () => {
  console.log("User is connected");
});

httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
