import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoomContextProvider } from "./context/roomContext";
import Home from "./pages/Home";
import Room from "./pages/Room";

const Router = () => {
  return (
    <BrowserRouter>
      <RoomContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="room/:roomId" element={<Room />} />
        </Routes>
      </RoomContextProvider>
    </BrowserRouter>
  );
};

export default Router;
