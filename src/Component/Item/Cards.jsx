import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ product, handleDelete, handlePurchase }) => {
  const navigate = useNavigate();
  const { _id, name, location, roomType } = product;

  return (
    <div class="cart-container w-100">
      <div class="cart-body">
        <h1>Booking ID : {_id}</h1>
        <h2> Name: {name}</h2>
        <h5>Room Type: {roomType}</h5>
        <p>location: {location}</p>
      </div>
      <div class="cartActions">
        <button onClick={() => handleDelete(_id)} className="btn-fo">
          Delete
        </button>
      </div>
      <div class="cartActions">
        <button onClick={() => handlePurchase()} className="btn-btn-fo">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Card;
