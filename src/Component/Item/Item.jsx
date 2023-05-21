import React from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const navigate = useNavigate();

  const seeDetails = (id) => {
    navigate(`/currentPackage/${id}`);
    //  navigate(path);
  };

  const { product } = props;
  const { _id, name, img, duration, amount } = product;

  return (
    <div class="item-container w-100">
      <img src={img} alt="" className="frame w-100" />
      <div class="card-body">
        <h2> {name}</h2>
        <h5> {duration}</h5>
        <p> {amount}</p>
      </div>
      <div class="card-actions">
        <button onClick={() => seeDetails(_id)} className="btn-info">
          See Details
        </button>
      </div>
    </div>
  );
};

export default Item;
