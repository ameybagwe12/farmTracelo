import React, { useState, useEffect } from "react";
import { Web3 } from "web3";
import Card1 from "../Components/Card1";
import Navbar from "../Components/Nav";

export default function Buy({ account, contract, connectWallet }) {
  const [buyData, setBuyData] = useState("");

  useEffect(() => {
    const run = async () => {
      const web3 = new Web3(
        new Web3.providers.HttpProvider("http://localhost:7545")
      );

      const data = await contract.methods.getAllProducts().call();
      setBuyData(data);
      console.log(data);
    };

    run();
  }, [contract]);

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
        {buyData &&
          buyData.map((product, index) => (
            <Card1 key={index} product={product} />
          ))}
      </div>
    </>
  );
}
