import React from "react";
import Navbar from "../Components/Nav";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/Track.css";

export default function Track() {
  return (
    <>
      <Navbar />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <p
          style={{
            fontSize: 35,
            marginTop: 40,
            color: "white",
            fontFamily: "Pixelify Sans",
          }}
        >
          Enter Tracking Id
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 50,
          }}
        >
          <TextField
            style={{ backgroundColor: "white", width: 300 }}
            id="filled-basic"
            label="Enter Transaction Id"
            variant="filled"
            InputLabelProps={{
              style: {
                color: "#9BCF53",
                fontFamily: "Pixelify Sans",
                fontWeight: "bold",
              },
            }} // Change placeholder color
            InputProps={{
              notched: false, // Remove outline animation
              style: { color: "#9BCF53" }, // Change input text color
            }}
          />
        </div>
      </Box>
    </>
  );
}
