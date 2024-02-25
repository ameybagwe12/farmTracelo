import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Card1({ product }) {
  const randomNumber = Math.floor(Math.random() * 317) + 1;
  console.log(product.price);

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        width: "15%",
        height: "250px",
        borderRadius: "24px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={require(`../assets/mc_skin_faces/1 (${randomNumber}).png`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {product.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Price - {Number(product.price)} Rs.
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Bought Weight - {Number(product.bought_weight)} Kg
        </Typography>
      </CardContent>
    </Card>
  );
}
