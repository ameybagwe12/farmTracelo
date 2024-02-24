import React from "react";
import "../styles/Home.css";
import "../styles/typewriter.css";
import Lottie from "lottie-react";
import Farmer from "../assets/AnimationFarmer.json";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className="homeDiv">
        <div className="titleDiv">
          <p
            style={{
              marginLeft: 400,
              fontSize: 50,
              marginTop: 10,
            }}
            className="typewriter"
          >
            Welcome To Farm Tracelo !!!
          </p>
        </div>
      </div>

      <div>
        <Button
          style={{ fontFamily: "Pixelify Sans", width: 150, height: 70 }}
          variant="contained"
          color="success"
        >
          Start Farming
        </Button>
      </div>

      <Lottie
        style={{ marginLeft: 60, width: 900, height: 700 }}
        animationData={Farmer}
      />
    </>
  );
}
