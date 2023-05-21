import React from "react";
import Product from "../../Component/Product/Product";

const CurrentPackage = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "bold",
          fontStyle: "italic",
          paddingTop: "30px",
        }}
      >
        Current Hot Package
      </h1>
      <Product />
    </div>
  );
};

export default CurrentPackage;
