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
  createRoom() {
    const roomId = uuid();
    return { roomId };
  }

  @OnMessage("join-room")
  joinRoom(@MessageBody() body: any, @ConnectedSocket() socket: Socket) {
    const { roomId } = body;
    socket.join(roomId);
    console.log("You joined the room", body);
  }
}
