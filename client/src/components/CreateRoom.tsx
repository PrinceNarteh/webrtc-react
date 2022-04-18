import React from "react";
import { useRoomContext } from "../context/roomContext";

const CreateRoom = () => {
  const { ws } = useRoomContext();

  const createRoom = () => {
    ws.emit("create-room");
  };

  return (
    <button
      onClick={createRoom}
      className="bg-teal-500 py-2 px-4 rounded-md text-white hover:bg-teal-600"
    >
      Start New Meeting
    </button>
  );
};

export default CreateRoom;
