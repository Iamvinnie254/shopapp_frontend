import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import api from "../../api";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(function () {
    api
        .get("products")
        
      .then((res) => {
        console.log(res.data);
          setProducts(res.data);
          
      })
      .catch((err) => {
          console.log(err.message);
         
      });
  }, []);

  return (
    <>
      <Header />
      <CardContainer products={products} />
    </>
  );
};

export default HomePage;
