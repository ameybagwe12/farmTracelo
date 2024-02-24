import React from "react";
import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Track from "./pages/Track";
import Buy from "./pages/Buy";
import Add from "./pages/Add";
export default function App() {
  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<Track />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}
