import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Nav";
import "../styles/Track.css";
import Table from "../Components/Table.jsx";

export default function Track({ account, contract, connectWallet }) {
  let { prodId } = useParams();
  const [trail, setTrail] = useState([]);
  const [url, setUrl] = useState("");

  const product = async () =>
    await contract.methods
      .getProduct(prodId)
      .call()
      .then((product) => {
        console.log("Url: ", product.fileUrl);
        setUrl(product.fileUrl);
      })
      .catch((error) => console.error(error));

  useEffect(() => {
    const getChain = async () => {
      await recur(contract, prodId, setTrail);
    };
    getChain();
  }, []); // Run the effect only once on initial render

  useEffect(() => {
    if (trail.length > 0) {
      console.log(trail);
    }
  }, [trail]); // Run the effect whenever trail changes

  const recur = async (contract, prodId, setTrail) => {
    const resp = await contract.methods.getProduct(prodId).call();
    setTrail((prevTrail) => [...prevTrail, resp]);
    if (resp.prev !== "") {
      await recur(contract, resp.prev, setTrail);
    }
  };

  return (
    <>
      <Navbar account={account} connectWallet={connectWallet} />

      <div style={{ marginTop: 50, padding: 20 }}>
        <Table trackData={trail} />
      </div>
    </>
  );
}
