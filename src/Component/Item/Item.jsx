import React from 'react';
import "./Item.css";

const Item = (props) => {

  
  const { product } = props;
  const { name, img, duration, amount } = product;


    return (
        <div class="item-container w-100">
            <img src={img} alt="" className='frame w-100'/>
        <div class="card-body">
          <h2> {name}</h2>
          <h5> {duration}</h5>
          <p> {amount}</p>
        </div>
        <div class="card-actions">
            <button className='btn-info'>See Details</button>
          </div>
      </div>
    );
};

export default Item;