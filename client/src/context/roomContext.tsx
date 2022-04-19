import Peer from "peerjs";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient, { Socket } from "socket.io-client";
import { v4 as uuid } from "uuid";

const url = "http://localhost:4000" as string;
const ws = socketIOClient(url);

type IRoomContext = {
  ws: Socket;
  me?: Peer;
};
const RoomContext = createContext({} as IRoomContext);

function RoomContextProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [me, setMe] = useState<Peer>();

  const enterRoom = ({ roomId }: { roomId: string }) => {
    navigate(`room/${roomId}`);
  };

  const getUsers = ({ participants }: { participants: string[] }) => {
    console.log(participants);
  };

  useEffect(() => {
    const meId = uuid();
    const peer = new Peer(meId);
    setMe(peer);
    ws.on("create-room_success", enterRoom);
    ws.on("get-users", getUsers);
  }, []);

  console.log({ ws });

  return (
    <RoomContext.Provider value={{ ws, me }}>{children}</RoomContext.Provider>
  );
}

export { RoomContext, RoomContextProvider };
