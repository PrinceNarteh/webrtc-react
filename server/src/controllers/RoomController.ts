import {
  ConnectedSocket,
  EmitOnSuccess,
  MessageBody,
  OnConnect,
  OnMessage,
  SocketController,
} from "socket-controllers";
import { Socket } from "socket.io";
import { v4 as uuid } from "uuid";

@SocketController()
export class RoomController {
  @OnConnect()
  connection() {
    console.log("User is connected!!!");
  }

  @OnMessage("create-room")
  @EmitOnSuccess("create-room_success")
  createRoom(@ConnectedSocket() socket: Socket) {
    const roomId = uuid();
    socket.join(roomId);

    return { roomId };
  }

  @OnMessage("join-room")
  joinRoom(@MessageBody() body: string) {
    console.log("You joined the room", body);
  }
}
