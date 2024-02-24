import React from "react";
import "../styles/Home.css";
import "../styles/typewriter.css";
import Lottie from "lottie-react";
import Farmer from "../assets/AnimationFarmer.json";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Home() {
  
  return (
    <>
      <div className="homeDiv">
        <div className="titleDiv">
          <p
            style={{
              marginLeft: 400,
              fontSize: 50,
              marginTop: 50,
            }}
            className="typewriter"
          >
            Welcome To Farm Tracelo !!!
          </p>
        </div>
        <div style={{ marginTop: 200, marginLeft: 800 }}>
        <NavLink  to="/buy">
          <Button
            style={{ fontFamily: "Pixelify Sans", width: 150, height: 70 }}
            variant="contained"
            color="success"
           
          >
            Start Farming
          </Button>
          </NavLink>
        </div>
      </div>

      <div style={{ marginLeft: 350 }} className="bounce-in-top">
        <Lottie
          style={{ marginLeft: 60, width: 900, height: 700 }}
          animationData={Farmer}
        />
      </div>
    </>
  );
}
