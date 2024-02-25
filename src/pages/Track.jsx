import React from "react";
import Navbar from "../Components/Nav";
import "../styles/Track.css";
import { useParams } from "react-router-dom";

export default function Track({ account, connectWallet }) {
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

  return (
    <>
      <Navbar account={account} connectWallet={connectWallet} />
    </>
  );
}
