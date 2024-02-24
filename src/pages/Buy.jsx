import React from "react";
import Navbar from "../Components/Nav";
import Card1 from "../Components/Card1";
export default function Buy({ account, connectWallet }) {
  return (
    <>
      <Navbar account={account} connectWallet={connectWallet} />
      <Card1 />
    </>
  );
}
