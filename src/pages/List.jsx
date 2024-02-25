import React from "react";
import Navbar from "../Components/Nav";
import Card1 from "../Components/Card1";
import Card2 from "../Components/Card2";

export default function List({ account, connectWallet }) {
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
