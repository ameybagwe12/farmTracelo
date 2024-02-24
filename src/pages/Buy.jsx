import React from 'react';
import Navbar from '../Components/Nav';
import Card1 from '../Components/Card1';

export default function Buy() {
  return (
    <>
      <Navbar />
      <div style={{
       display:"flex",
        flexWrap: "wrap",
      justifyContent:"space-around",
      marginTop:"50px"
      }}>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 /> 
    
      </div>
    </>
  );
}
