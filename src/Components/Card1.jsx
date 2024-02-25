import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Buy.css";

export default function Card1({ product }) {
  const randomNumber = Math.floor(Math.random() * 317) + 1;
  
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        width: "20%",
        height: "300px",
        borderRadius: "24px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={require(`../assets/mc_skin_faces/1 (${randomNumber}).png`)}
      />
      <CardContent
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          style={{ fontFamily: "Pixelify Sans" }}
          className="cardTypo"
          gutterBottom
          variant="h3"
          component="div"
        >
          {product.name}
        </Typography>

        <Typography
          style={{ fontFamily: "Pixelify Sans" }}
          className="cardTypo"
          variant="h5"
          component="div"
        >
          Product Id - {product.prod_id}
        </Typography>
        <Typography
          style={{ fontFamily: "Pixelify Sans" }}
          className="cardTypo"
          variant="h5"
          color="text.secondary"
        >
          Price - {Number(product.price)} Rs.
        </Typography>

        <Typography
          style={{ fontFamily: "Pixelify Sans" }}
          className="cardTypo"
          variant="h5"
          color="text.secondary"
        >
          Bought Weight - {Number(product.bought_weight)} Kg
        </Typography>

        {/* <Typography
          style={{ fontFamily: "Pixelify Sans" }}
          className="cardTypo"
          variant="h5"
          color="text.secondary"
        > */}
        {/* Date Issued - {product.date} */}
        <NavLink
          style={{ backgroundColor: "black" }}
          to={`/track/${product.prod_id}`}  
        >
          Track This Product
        </NavLink>
        <NavLink
          style={{ backgroundColor: "black" }}
          to={`/addTrader/${product.prod_id}`}
        >
          Buy This Product
        </NavLink>
        {/* </Typography> */}
      </CardContent>
    </Card>
  );
}
