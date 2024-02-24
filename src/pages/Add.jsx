import React, { useState } from "react";
import Navbar from "../Components/Nav";
import { Button } from "@mui/base";
import FormInput from "../Components/FormInput";

export default function Add() {
  const [userType, setUserType] = useState("farmer");

  const [farmerValues, setFarmerValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

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
    // Add other common fields
  ];
  const inputs1 = [
    {
      id: 1,
      name: "id",
      type: "text",
      placeholder: "Product ID",
      label: "Product ID",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Product Name",
      label: "Product Name",
      required: true,

      disabled: true,
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
      placeholder: "weight (in kgs)",
      label: "Weight",
      required: true,
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
  };

  return (
    <>
      <Navbar />
      <div style={{ margin: 70 }}>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "44px",
            marginTop: "83px",
            fontFamily: "Pixelify Sans",
            fontSize: 35,
          }}
        >
          Sell Item
        </h1>
        <div
          className="bounce-in-top"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <form
            className="bounce-in-top"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#436850",
              justifyContent: "center",
              paddingLeft: 40,
              paddingRight: 40,
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
                    value={farmerValues[input.name]}
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
                width: 150,
                height: 70,
                fontSize: 20,
                color: "#9BCF53",
                fontWeight: "bold",
              }}
              variant="contained"
              color="success"
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
