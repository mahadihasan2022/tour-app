import React from "react";
import { Outlet } from "react-router-dom";
import ViewRightBar from "../Component/RightBar/ViewRightBar";

const ViewLayout = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <ViewRightBar />
      </div>
    </div>
  );
};

export default ViewLayout;
