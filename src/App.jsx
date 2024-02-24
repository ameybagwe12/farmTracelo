import React from "react";
import Home from "./pages/Home";
import "./styles/App.css";
import {Routes, Route, useLocation} from 'react-router-dom';
import Track from "./Components/Track";
import Buy from "./Components/Buy";
export default function App() {
  return (

    <div className="background">
    <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/track" element={<Track />}/>
    <Route path="/buy" element={<Buy />}/>
    </Routes>
      

    </div>
  );
}
