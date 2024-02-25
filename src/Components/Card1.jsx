import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Card1({ nft }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000); // Reset the animation after 1 second
  };

  return (
    <Card
      sx={{ maxWidth: 345, transition: "transform 0.3s" }}
      style={{
        width: "15%",
        height: "250px",
        borderRadius: "24px",
        transform: clicked ? "scale(1.1)" : "scale(1)",
      }}
      onClick={handleClick}
    >
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Wheat
        </Typography>
        <Typography variant="h5" color="text.secondary">
          12/58/55
        </Typography>
        <Typography variant="h5" color="text.secondary">
          46262
        </Typography>
      </CardContent>
    </Card>
  );
}
