import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Buy.css";
import { Button } from "@mui/base";

export default function Card1({ product }) {
  const randomNumber = Math.floor(Math.random() * 317) + 1;

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        width: "20%",
        height: "310px",
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
          justifyContent: "",
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

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            style={{
              fontFamily: "Pixelify Sans",
              width: 110,
              height: 38,
              fontSize: 20,
              backgroundColor: "green",
            }}
            variant="contained"
            color="success"
          >
            <NavLink
              style={{ fontFamily: "Pixelify Sans" }}
              to={`/addTrader/${product.prod_id}`}
            >
              Buy
            </NavLink>
          </Button>
          <Button
            style={{
              fontFamily: "Pixelify Sans",
              width: 125,
              height: 38,
              fontSize: 20,
              marginLeft: 5,
              backgroundColor: "green",
            }}
            variant="contained"
            color="success"
          >
            <NavLink to={`/track/${product.prod_id}`}>Track</NavLink>
          </Button>
        </div>

        {/* <Typography
          style={{ fontFamily: "Pixelify Sans" }}
          className="cardTypo"
          variant="h5"
          color="text.secondary"
        >
          
        </Typography>
        <Typography
          style={{ fontFamily: "Pixelify Sans" }}
          className="cardTypo"
          variant="h5"
          color="text.secondary"
        >
          <NavLink
            style={{ color: "grey" }}
          >
            Buy This Product
          </NavLink>
        </Typography> */}
      </CardContent>
    </Card>
  );
}
