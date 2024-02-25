import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Nav";
import "../styles/Track.css";

export default function Track({ account, contract, connectWallet }) {
  let { prodId } = useParams();

  //   async function main() {
  //     const contractAddress = "0xcEa45Ac3CE75843ed5436b70713B20E314266a64";
  //     const contract = await ethers.getContractAt("PT", contractAddress);
  //     let products = [];
  //     await recur(contract, "456", products);
  //   }

  //   async function recur(contract, id, products) {
  //     const product = await contract.getProduct(id);
  //     products.push(product);
  //     console.log(product);

  //     if (product.prev !== "") {
  //       await recur(contract, product.prev);
  //     }
  //     console.log(products);
  //   }

  //   main()
  //     .then(() => process.exit(0))
  //     .catch((error) => {
  //       console.error(error);
  //       process.exit(1);
  //     });

  const [trail, setTrail] = useState([])
  const getChain = async() => {
    // const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))

    console.log("Prod ID: ", prodId)
    await recur(contract, prodId, setTrail)
    console.log("Trail:", trail)
  }

  const recur = async(contract, prodId, setTrail) => {
    const resp = await contract.methods.getProduct(prodId).call()
    setTrail((prevTrail) => [...prevTrail, resp])
    if (resp.prev !== "") {
      await recur(contract, resp.prev, setTrail)
    }
  }

  return (
    <>
      <Navbar account={account} connectWallet={connectWallet} />
      <button onClick={async () => await getChain()}>Get Trail</button>
    </>
  );
}
