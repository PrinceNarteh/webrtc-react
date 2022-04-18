import "reflect-metadata";
import { createServer } from "http";
import { appServer } from "./app";
import { socketServer } from "./socket";
const PORT = process.env.PORT || 4000;

const httpServer = createServer(appServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

socketServer(httpServer);
