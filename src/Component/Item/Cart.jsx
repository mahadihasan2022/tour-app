import React from 'react';

const Cart = ({product, handlePurchase, handleDelete}) => {
    const { _id, name, duration, amount } = product;
    return (
        <div class="cart-container w-100">
      <div class="cart-body">
        <h1>Booking ID : {product._id}</h1>
        <h2> Name: {product.name}</h2>
        <h5>Duration: {product.duration}</h5>
        <p>Destination: {product.destination}</p>
      </div>
      <div class="cartActions">
        <button onClick={() => handlePurchase(product,_id)} className="btn-fo">
        Delete
        </button>
      </div>
      <div class="cartActions">
        <button onClick={() => handlePurchase(product,_id)} className="btn-btn-fo">
         Purchase 
        </button>
      </div>
    </div>

    );
};

export default Cart;