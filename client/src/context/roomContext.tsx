import { createContext, ReactNode, useContext, useEffect } from "react";
import socketIOClient, { Socket } from "socket.io-client";
const url = "http://localhost:4000" as string;
const ws = socketIOClient(url);

type IRoomContext = {
  ws: Socket;
};
const RoomContext = createContext({} as IRoomContext);

function RoomContextProvider({ children }: { children: ReactNode }) {
  const enterRoom = ({ roomId }: { roomId: string }) => {
    console.log({ roomId });
  };

  useEffect(() => {
    ws.on("create-room_success", enterRoom);
  }, []);

  return <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>;
}

const useRoomContext = () => useContext(RoomContext);

export { RoomContext, RoomContextProvider, useRoomContext };
