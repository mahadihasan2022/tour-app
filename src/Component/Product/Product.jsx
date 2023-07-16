import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const handleAddToCart = (product, id) => {
    carts.push(product);
    // console.log(carts);
    navigate(`/currentPackage/${id}`);
  };

  useEffect(() => {
    fetch("http://localhost:5000/currentPackage")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product w-100">
      <div className="product-container w-100">
        {products.map((product) => (
          <Item
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default Product;
