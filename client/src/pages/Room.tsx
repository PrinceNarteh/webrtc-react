import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRoomContext } from "../hooks/useRoomContext";

const Room = () => {
  const { ws, me } = useRoomContext();
  const { roomId } = useParams();

  useEffect(() => {
    if (me) {
      ws.emit("join-room", { roomId, peerId: me.id });
    }
  }, []);

  return <div>Room - {roomId}</div>;
};

export default Room;
