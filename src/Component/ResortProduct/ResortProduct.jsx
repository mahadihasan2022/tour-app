import React, { useEffect, useState } from "react";
import ResortItem from "../ResortItem/ResortItem";
import "./ResortProduct.css";

const ResortProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bestResort")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="best-product">
      <div className="best-product-container">
        {products.map((product) => (
          <ResortItem key={product._id} product={product}></ResortItem>
        ))}
      </div>
    </div>
  );
};

export default ResortProduct;
