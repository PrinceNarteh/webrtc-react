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

const rooms: Record<string, string[]> = {};
interface IRoomParams {
  roomId: string;
  peerId: string;
}

@SocketController()
export class RoomController {
  @OnConnect()
  connection() {
    console.log("User is connected!!!");
    console.log(rooms);
  }

  @OnMessage("create-room")
  @EmitOnSuccess("create-room_success")
  createRoom() {
    const roomId = uuid();
    rooms[roomId] = [];
    return { roomId };
  }

  @OnMessage("join-room")
  joinRoom(
    @ConnectedSocket() socket: Socket,
    @MessageBody() body: IRoomParams
  ) {
    const { roomId, peerId } = body;
    if (rooms[roomId]) {
      socket.join(roomId);
      rooms[roomId].push(peerId);
      socket.emit("get-users", { roomId, participants: rooms[roomId] });
    }
  }
}
