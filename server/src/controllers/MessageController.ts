import {
  MessageBody,
  OnConnect,
  OnMessage,
  SocketController,
} from "socket-controllers";

@SocketController()
export class MessageController {
  @OnConnect()
  connection() {
    console.log("User is connected!!!");
  }

  @OnMessage("join-room")
  joinRoom(@MessageBody() body: string) {
    console.log("You joined the room", body);
  }
}
