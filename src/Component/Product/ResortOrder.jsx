import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Cards from "../Item/Cards";
import { useNavigate, useParams } from "react-router-dom";

const ResortOrder = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  const handlePurchase = (id) => {
    const url = `http://localhost:5000/ssl-payment`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.GatewayPageURL);
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You Sure To This Option Will Be Delete?"
    );
    if (proceed) {
      console.log("Delete Confirm", id);
      const url = `http://localhost:5000/resortOrders?email=${user?.email}`;
      fetch(url, {
        method: "DElETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("Delete Successful");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/resortOrders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user?.email]);

  return (
    <div className="viewOrder">
      <div className="viewOrder-container">
        {products.map((product) => (
          <Cards
            key={product._id}
            product={product}
            handleDelete={handleDelete}
            handlePurchase={handlePurchase}
          ></Cards>
        ))}
      </div>
    </div>
  );
};

export default ResortOrder;
