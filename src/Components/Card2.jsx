import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { NavLink } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


export default function Card2({nft}) {
  const randomNumber = Math.floor(Math.random() * 317) + 1;
  return (
    <>    <Card sx={{ maxWidth: 345 }} style={{
      width: "15%",
      height: "295px",
      borderRadius: "24px"
    }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={require(`../assets/mc_skin_faces/1 (${randomNumber}).png`)}
    
     />
    <CardContent>
      <Typography gutterBottom variant="h3" component="div">
      Wheat
      
      
      <Typography variant="h5" color="text.secondary">
      12/58/55
      </Typography>
      <Typography variant="h5" color="text.secondary">
      46262 
      </Typography>

      </Typography>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Button
      style={{
        fontFamily: "Pixelify Sans",
        width: 110,
        height: 38,
        fontSize: 20,
      }}
      variant="contained"
      color="success"
      
    >
    <NavLink
    style={{ fontFamily: "Pixelify Sans" }}
    to="/add"
    
   
  >
    Sell
  </NavLink>
    </Button>  
    <Button
      style={{
        fontFamily: "Pixelify Sans",
        width: 125,
        height: 38,
        fontSize: 20,
        marginLeft:5
      }}
      variant="contained"
      color="success"
      
    >
     Consume
    </Button> 
    </div>
    
    </CardContent>
      </Card>
 
  </>

  )
}
