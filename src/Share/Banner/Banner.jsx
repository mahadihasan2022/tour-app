import React from "react";
import alaska from "../../Source/Video/alaska.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <video className="bg-video" src={alaska} autoPlay loop muted></video>
      <div className="bg-overlay"></div>
    </div>
  );
};

export default Banner;
