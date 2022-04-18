import { createContext, ReactNode, useContext } from "react";
import socketIO, { Socket } from "socket.io-client";
const url = "http://localhost:4000" as string;
const ws = socketIO(url);

type IRoomContext = {
  ws: Socket;
};
const RoomContext = createContext({} as IRoomContext);

function RoomContextProvider({ children }: { children: ReactNode }) {
  return <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>;
}

const useRoomContext = () => useContext(RoomContext);

export { RoomContext, RoomContextProvider, useRoomContext };
