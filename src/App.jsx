import React from "react";
import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Track from "./pages/Track";

export default function App() {
  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<Track />} />
      </Routes>
    </div>
  );
}
