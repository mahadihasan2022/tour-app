import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Product.css";



const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
        <div className="product w-100">
          <div className="container w-100">
            {products.map((product) => (
              <Item key={product._id} product={product}></Item>
            ))}
          </div>
        </div>
  );
};

export default Product;