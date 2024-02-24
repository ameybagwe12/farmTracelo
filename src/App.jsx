import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Track from "./pages/Track";
import Buy from "./pages/Buy";
import Add from "./pages/Add";
import Web3 from 'web3';
import contractData from './contract/contract.json'

export default function App() {

  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  const initializeWeb3 = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
        setContract(new web3Instance.eth.Contract(contractData.contractABI, contractData.contractAddress));
        console.log("conn: ", account);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert('Please install MetaMask or another Ethereum wallet.');
    }
  };

  useEffect(() => {

    initializeWeb3();
  }, []); // Empty dependency array to ensure this effect runs only once during component mount

  useEffect(() => {
    console.log("account: ", account);
  }, [account]);

  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<Home account={account} connectWallet={initializeWeb3} />} />
        <Route path="/track" element={<Track account={account} connectWallet={initializeWeb3} />} />
        <Route path="/buy" element={<Buy account={account} connectWallet={initializeWeb3} />} />
        <Route path="/add" element={<Add account={account} connectWallet={initializeWeb3} />} />
      </Routes>
    </div>
  );
}
