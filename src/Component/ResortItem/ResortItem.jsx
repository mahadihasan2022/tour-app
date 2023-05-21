import React from "react";
import { Button, Card } from "react-bootstrap";
import { MdLocationPin } from "react-icons/md";
import "./ResortItem.css";

const ResortItem = (props) => {
  const { product } = props;
  const { name, img, location, amount } = product;
  return (
    <div className="items">
      <div className="item">
        <div className="card">
          <img src={img} alt="" />
          <div className="card-body">
            <h1 className="card-tittle">{name}</h1>
            <h4 className="card-location">
              <MdLocationPin
                style={{ color: "red", paddingRight: "5px", fontSize: "30px" }}
              />
              {location}
            </h4>
            <p className="card-price">{amount}</p>
          </div>
          <div className="btn-controler">
            <button className="btn-info fw-bold">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortItem;
