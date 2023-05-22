import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import mahadi from '../../Source/Image/mahadi.png';
import zara from '../../Source/Image/zara.png';
import zim from '../../Source/Image/zim.png';
import jakiya from '../../Source/Image/jakiya.png';
import mehedi  from '../../Source/Image/mehedi.png';
import tanzila from '../../Source/Image/tanzila.png';
import './Prestigious.css';


const Prestigious = () => {
  return (
    <div>
      <div className="prestigious">
        <h1>Our Website Prestigious</h1>
        <div className="prestigious-container">
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img src={mahadi} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>Mahadi Hasan</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img src={zara} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>Sarde Ajmeri</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img className="pt-10 pr-2 w-16" src={zim} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>Mohammad Zim </h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img src={jakiya} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>Jakiya Parvin</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img src={mehedi} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>Mehedi Hasan</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img src={tanzila} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>Sumiya Akter</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prestigious;