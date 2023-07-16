import React from "react";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiBed } from "react-icons/gi";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const ResortItem = (props) => {
  const { product } = props;
  const navigate = useNavigate();

  const seeResortDetails = (id) => {
    navigate(`/bestResort/${id}`);
    //  navigate(path);
  };
  const {
    _id,
    name,
    img,
    location,
    feature,
    doubleBedType,
    singleBedType,
    amount,
  } = product;

  return (
    <div className="resort-cardBody">
      <div className="cardBody">
        <img src={img} alt="" />
      </div>
      <div className="cardBody-tittle">
        <h1>{name}</h1>
        <div>
          <MdLocationOn style={{ color: "red", fontSize: "20px" }} />{" "}
          <span style={{ paddingLeft: "4px" }}>{location}</span>
        </div>
        <div>
          <AiOutlineCheckCircle style={{ color: "lime" }} />
          <span style={{ paddingLeft: "10px" }}>{feature}</span>
        </div>
        <div className="double-bed" style={{ paddingTop: "4px" }}>
          <GiBed style={{ color: "#14b8a6" }} />
          <span style={{ paddingLeft: "10px" }}>{doubleBedType}</span>
        </div>
      </div>
      <div className="cardBody-type">
        <div className="double-bed" style={{ paddingTop: "4px" }}>
          <GiBed style={{ color: "#14b8a6" }} />
          <span style={{ paddingLeft: "10px" }}>{singleBedType}</span>
        </div>
      </div>
      <div className="resortRightBar">
        <h6>Starting</h6>
        <p>{amount}</p>
        <div className="rightBart-btn">
          <button
            onClick={() => seeResortDetails(_id)}
            className="rightBar-info"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResortItem;
