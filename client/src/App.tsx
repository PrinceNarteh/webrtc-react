import React, { useEffect } from "react";
import socketIO from "socket.io-client";

const ws = "http://localhost:4000";

function App() {
  useEffect(() => {
    socketIO(ws);
  });
  return (
    <div>
      <h1>WebRTC Video App</h1>
    </div>
  );
}

export default App;
