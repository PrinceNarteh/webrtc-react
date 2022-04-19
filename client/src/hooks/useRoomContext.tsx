import { useContext } from "react";
import { RoomContext } from "../context/roomContext";

export const useRoomContext = () => useContext(RoomContext);
