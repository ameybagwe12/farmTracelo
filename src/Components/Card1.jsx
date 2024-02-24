import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Card1({nft}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{
      width: "15%",
      height: "250px",
      borderRadius: "24px"
    }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
   
      image="https://minecraft.wiki/images/Wheat_JE2_BE2.png?b8cd3"
    
    style={{width:"150px",marginLeft:"20px"}}  />
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
  )
}
