import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { NavLink } from "react-router-dom";



export default function Card2({product, contract, account}) {

  const consume = async () => {
    await contract.methods.consumeProduct(product.prod_id).send({from: account});
  }

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
        {product.name}
      
      
      <Typography variant="h5" color="text.secondary">
        {product.date}
      </Typography>
      <Typography variant="h5" color="text.secondary">
        {product.price}
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
    to={`/addTrader/${product.prod_id}`}
    
   
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
      onClick={() => consume(product)}
    >
     Consume
    </Button> 
    </div>
    
    </CardContent>
      </Card>
 
  </>

  )
}
