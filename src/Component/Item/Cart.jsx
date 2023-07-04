import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({product, handleDelete, handlePurchase}) => {
  const navigate = useNavigate();
    const { _id } = product;
 
    return (
        <div class="cart-container w-100">
      <div class="cart-body">
        <h1>Booking ID : {product._id}</h1>
        <h2> Name: {product.name}</h2>
        <h5>Duration: {product.duration}</h5>
        <p>Destination: {product.destination}</p>
      </div>
      <div class="cartActions">
        <button onClick={() => handleDelete(_id)} className="btn-fo">
        Delete
        </button>
      </div>
      <div class="cartActions">
        <button onClick={ () => handlePurchase ()} className="btn-btn-fo">
         Purchase 
        </button>
      </div>
    </div>

    );
};

export default Cart;