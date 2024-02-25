import React from "react";
import Card2 from "../Components/Card2";
import Navbar from "../Components/Nav";

export default function List({ account, connectWallet }) {
  const getSellerProducts = async() => {

  }
  return (
    <>
      <Navbar account={account} connectWallet={connectWallet} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </>
  );
}
