import React, { useState } from "react";
import { Web3 } from "web3";
import Card2 from "../Components/Card2";
import Navbar from "../Components/Nav";

export default function List({ account,contract, connectWallet }) {
  const [products, setProducts] = useState([])
  const getSellerProducts = async() => {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))

    await contract.methods.getAllProducts().call()
    .then(data => {setProducts(data) 
      console.log(data)})
    console.log("Filter:",products.filter(product => account === product.seller))
    console.log("Account:", account, "Product:", products[0])
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
        <button onClick={() => getSellerProducts()}>Get Products</button>
      </div>
    </>
  );
}
