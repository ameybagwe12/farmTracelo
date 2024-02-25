import React from "react";
import { Web3 } from "web3";
import Card2 from "../Components/Card2";
import Navbar from "../Components/Nav";

export default function List({ account,contract, connectWallet }) {
  const getSellerProducts = async() => {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))

    await contract.methods.getSellerProduct().call()
    .then(data => console.log("Seller:", data))
    
    getSellerProducts()
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
