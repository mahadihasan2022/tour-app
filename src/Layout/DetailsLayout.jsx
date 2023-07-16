import React from "react";
import { Outlet } from "react-router-dom";
import DetailsRightBar from "../Component/RightBar/DetailsRightBar";

const DetailsLayout = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <DetailsRightBar />
      </div>
    </div>
  );
};

export default DetailsLayout;
