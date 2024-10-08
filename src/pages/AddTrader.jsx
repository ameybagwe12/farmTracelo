
import { Button } from "@mui/base";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import FormInput from "../Components/FormInput";
import Navbar from "../Components/Nav";

export default function AddTrader({ account, contract, connectWallet }) {
  let {prodId} = useParams();
  const [userType, setUserType] = useState("farmer");
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 4);
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  console.log(small_id);
  const [farmerValues, setFarmerValues] = useState({
    id: small_id,
    price: "",
    weight: "",
    prev: "",
    date: formattedDate,
  });

  const addProduct = async () => {
    console.log(`Prod ID: ${prodId}`);
    contract.methods
      .addProductByTrader(
        farmerValues.id,
        farmerValues.date.toString(),
        Number(farmerValues.weight),
        Number(farmerValues.price),
        prodId,
      )
      .send({ from: account })

      .then((hash) => {
        console.log(`Hash: ${hash}`);
        setFarmerValues({
          id: small_id,
          price: "",
          weight: "",
          prev: prodId,
          date: formattedDate,
        });
      });

      contract.methods.getProduct(prodId).call().then(data => console.log('Check;', data))
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
      name: "price",
      type: "number",
      placeholder: "Price",
      label: "Price",
      required: true,
    },
    {
      id: 3,
      name: "weight",
      type: "number",
      placeholder: "Weight (in kgs)",
      label: "Weight",
      required: true,
    },
    {
      id: 4,
      name: "date",
      type: "text",
      value: formattedDate,
      label: "Date",
      required: true,
      placeholderColor: "#9BCF53",
      disabled: true,
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
      name: "price",
      type: "number",
      placeholder: "Price",
      label: "Price",
      required: true,
      placeholderColor: "#9BCF53",
    },
    {
      id: 3,
      name: "weight",
      type: "number",
      placeholder: "weight (in kgs)",
      label: "Weight",
      required: true,
      placeholderColor: "#9BCF53",
    },

    // Add other common fields
  ];
  const handleFarmerSubmit = (e) => {
    e.preventDefault();
    // Handle farmer form submission
    console.log("Farmer form submitted:", farmerValues);
  };

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
