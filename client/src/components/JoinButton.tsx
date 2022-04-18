import React from "react";
import { useRoomContext } from "../context/roomContext";

const Join = () => {
  const { ws } = useRoomContext();

  const joinRoom = () => {
    ws.emit("joinRoom");
  };

  return (
    <button
      onClick={joinRoom}
      className="bg-teal-500 py-2 px-4 rounded-md text-white hover:bg-teal-600"
    >
      Start Meeting
    </button>
  );
};

export default Join;
