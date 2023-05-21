import React, { useEffect, useState } from "react";
import ResortItem from "../../Component/ResortItem/ResortItem";
import "./BestResort.css";
import ResortProduct from "../../Component/ResortProduct/ResortProduct";

const BestResort = () => {
  return (
    <div className="resort">
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          fontStyle: "italic",
          paddingTop: "50px",
        }}
      >
        Best Resort In Bangladesh
      </h1>
      <ResortProduct />
    </div>
  );
};

export default BestResort;
