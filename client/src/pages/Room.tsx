import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRoomContext } from "../context/roomContext";

const Room = () => {
  const { ws } = useRoomContext();
  const { roomId } = useParams();

  useEffect(() => {
    ws.emit("join-room", { roomId });
  }, []);

  return <div>Room - {roomId}</div>;
};

export default Room;
