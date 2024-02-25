import { Button } from "@mui/base";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Web3 } from "web3";
import FormInput from "../Components/FormInput";
import Navbar from "../Components/Nav";
import key from '../key.json';
import axios from 'axios';

export default function Add({ account, contract, connectWallet }) {
  const [userType, setUserType] = useState("farmer");
  const [nftFile, setNftFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 4);
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  console.log(small_id);
  const [farmerValues, setFarmerValues] = useState({
    id: small_id,
    name: "",
    price: "",
    weight: "",
    date: formattedDate,
    fileUrl: fileUrl,
  });

  const addProduct = async () => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:7545")
    );

    console.log(`Values: ${farmerValues.price}`);
    contract.methods
      .addProductByFarmer(
        farmerValues.id,
        farmerValues.name,
        farmerValues.date.toString(),
        Number(farmerValues.weight),
        Number(farmerValues.price),
        farmerValues.fileUrl
      )
      .send({ from: account })
      .then((hash) => {
        console.log(`Hash: ${hash}`);
        setFarmerValues({
          id: small_id,
          name: "",
          price: "",
          weight: "",
          date: formattedDate,
          fileUrl: fileUrl,
        });
      });
  };

  const [traderValues, setTraderValues] = useState({
    // Define trader form fields here
  });

  const inputs = [
    {
      id: 1,
      name: "id",
      type: "text",
      placeholder: "Username",
      label: "Product ID",
      required: true,
      disabled: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Product Name",
      label: "Product Name",
      required: true,
    },

    {
      id: 3,
      name: "price",
      type: "number",
      placeholder: "Price",
      label: "Price",
      required: true,
    },
    {
      id: 4,
      name: "weight",
      type: "number",
      placeholder: "Weight (in kgs)",
      label: "Weight",
      required: true,
    },
    {
      id: 5,
      name: "date",
      type: "text",
      value: formattedDate,
      label: "Date",
      required: true,
      placeholderColor: "#9BCF53",
      disabled: true,
    },
    {
      id: 5,
      name: "photo",
      type: "file",
      placeholder: "Upload Img of Produce",
      label: "Photo",
      required: true,
      accept: "image/*",
      id: "nft-image",
      onChange: (e) => setNftFile(e.target.files[0]),
      placeholderColor: "#9BCF53",
    },  
    // Add other common fields
  ];

  const inputs1 = [
    {
      id: 1,
      name: "id",
      value: small_id,
      type: "text",
      placeholder: "Product ID",
      label: "Product ID",
      required: true,
      placeholderColor: "#9BCF53",
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Product Name",
      label: "Product Name",
      required: true,
      placeholderColor: "#9BCF53",
      disabled: true,
    },
    {
      id: 3,
      name: "price",
      type: "number",
      placeholder: "Price",
      label: "Price",
      required: true,
      placeholderColor: "#9BCF53",
    },
    {
      id: 4,
      name: "weight",
      type: "number",
      placeholder: "weight (in kgs)",
      label: "Weight",
      required: true,
      placeholderColor: "#9BCF53",
    },
    
  ];    
  const handleFarmerSubmit = (e) => {
    e.preventDefault();
    // Handle farmer form submission
    console.log("Farmer form submitted:", farmerValues);
  };

  const uploadToIPFS = async () => {
    console.log("ipfs uploading...");
    // console.log(product);
    // const product_id = Number(product[0]);
    // if (!(product_id && file)) return alert("Please select a Product ID and upload a report");
    try {
        const fileData = new FormData();
        fileData.append("file", nftFile);

        const res = await axios({
            method: "post",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data: fileData,
            headers: {
                pinata_api_key: key.API_Key,
                pinata_secret_api_key: key.API_Secret,
                "Content-Type": "multipart/form-data"
            }
        });
        console.log("res ", res);
        const ipfsHash = res.data.IpfsHash;
        console.log(ipfsHash);
        setFileUrl("https://cyan-magnetic-rat-616.mypinata.cloud/ipfs/" + ipfsHash);
        console.log(fileUrl);

        // await contract.methods.uploadCompanyReport(product_id, fileUrl).send({ from: account });
        console.log("trxn success");

    } catch (e) {
        console.log(e);
    }
  }

  const handleTraderSubmit = (e) => {
    e.preventDefault();
    // Handle trader form submission
    console.log("Trader form submitted:", traderValues);
  };

  const handleInputChange = (e) => {
    const values = userType === "farmer" ? farmerValues : traderValues;
    const setValues = userType === "farmer" ? setFarmerValues : setTraderValues;

    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(` values is ${farmerValues.name}`);
  };

  return (
    <>
      <Navbar account={account} connectWallet={connectWallet} />
      <div style={{ margin: 70 }}>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            marginTop: "40px",
            fontFamily: "Pixelify Sans",
            fontSize: 35,
          }}
        >
          Sell Item
        </h1>
        <div
          className="bounce-in-top"
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <form
            className="bounce-in-top"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#436850",
              justifyContent: "center",
              padding: 25,
              borderRadius: 10,
            }}
            onSubmit={
              userType === "farmer" ? handleFarmerSubmit : handleTraderSubmit
            }
          >
            {userType === "farmer"
              ? inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={
                      userType === "farmer"
                        ? farmerValues[input.name]
                        : traderValues[input.name]
                    }
                    onChange={handleInputChange}
                  />
                ))
              : inputs1.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={traderValues[input.name]}
                    onChange={handleInputChange}
                  />
                ))}
            <Button
              style={{
                fontFamily: "Pixelify Sans",
                width: 100,
                height: 60,
                fontSize: 20,
                color: "#9BCF53",
                fontWeight: "bold",
              }}
              variant="contained"
              color="success"
              onClick={() => addProduct()}
            >
              Submit
            </Button>
          </form>

          <div>
            {userType === "farmer" ? (
              <img src={require("../assets/farmer.png")} />
            ) : (
              <img src={require("../assets/trader.png")} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
