import React from "react";
import { Web3 } from "web3";
import Card1 from "../Components/Card1";
import Navbar from "../Components/Nav";

export default function Buy({ account, contract, connectWallet }) {
  const addProduct = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))

    contract.methods.getProduct("asjhfoashdgojsh").call()
    .then(data => console.log(data))
   
  }
  
  const run = async () => {
    addProduct()
  }
  return (
    <>
      <Navbar account={account} connectWallet={connectWallet} />
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
       <button onClick={() => run()}>Run</button>
    </>
  );
}


