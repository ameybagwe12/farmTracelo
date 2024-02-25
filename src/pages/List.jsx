import React, { useEffect, useState } from "react";
import Card2 from "../Components/Card2";
import Navbar from "../Components/Nav";

export default function List({ account,contract, connectWallet }) {
  const [products, setProducts] = useState([])

    // const data = useMemo(async () => {

    //   console.log("Resp:", resp)
    //   return resp
    // }, [contract])

    useEffect(() => {
      const run = async () => {
        const resp = await contract.methods.getAllProducts().call()
        setProducts(resp)
        console.log("Products:", products)
      }
    run();
    }, [contract])
    console.log("Products:", products)
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
        { products && products.map((product)=> {
          return <Card2 
            className="col"
            key={product.id}
            product={product}
          />

        })}
      </div>
      <div>

      </div>
    </>
  );
}
