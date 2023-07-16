import React, { useEffect, useState } from "react";
import Cart from "../Item/Cart";
import useAuth from "../../Hooks/useAuth";

const ViewOrder = () => {
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
      const url = `http://localhost:5000/orders?email=${user?.email}`;
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
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user?.email]);

  return (
    <div className="viewOrder">
      <div className="viewOrder-container">
        {products.map((product) => (
          <Cart
            key={product._id}
            product={product}
            handleDelete={handleDelete}
            handlePurchase={handlePurchase}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default ViewOrder;
