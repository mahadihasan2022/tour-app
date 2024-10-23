import React from "react";
import eventBanner from "../../Source/Image/eventBanner.png";
import close from "../../Source/Image/close.png";
import { CiImageOff } from "react-icons/ci";
import { MdElectricBolt } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";
import './Event.css';

const Event = () => {
  const eventHandler = () => {
    alert("this event is close now!!!");
  };

  return (
    <div className="event">
      <div className="event-container">
        <img src={eventBanner} alt="" />
        <div className="events">
          <div>
            <div onClick={eventHandler} className="event-btn">
              <h2>Tanguar Haur Trip With Shukher</h2>
              <h5>Remaining 3</h5>
              <h6>Premium HouseBoat</h6>
              <CiImageOff className="icon-icon" />
              <div className="event-img">
                <img src={close} alt="" />
              </div>
              <h3> Tanguar Haur Trip With Shukher</h3>
              <h3> Premium HouseBoat</h3>
              <div style={{ display: "flex", paddingTop: "12px", margin: "0" }}>
                <MdElectricBolt className="icon-electric" />
                <h4
                  style={{
                    fontSize: "16px",
                    paddingTop: "6px",
                    paddingLeft: "10px",
                  }}
                >
                  From{" "}
                  <span
                    style={{
                      color: "blueviolet",
                      fontSize: "20px",
                      paddingRight: "6px",
                    }}
                  >
                    6500
                  </span>
                  ৳
                </h4>
              </div>
              <div style={{ display: "flex", margin: "0" }}>
                <FcAlarmClock className="icon-clock" />
                <p
                  style={{
                    fontSize: "16px",
                    paddingTop: "8px",
                    paddingLeft: "10px",
                  }}
                >
                  {" "}
                  2 Days & 3 Night
                </p>
              </div>
            </div>
          </div>
          <div>
            <div onClick={eventHandler} className="event-btn">
              <h2>Tanguar Haur Economy Trip With </h2>
              <h5>Remaining 18</h5>
              <h6>Bari HouseBoat</h6>
              <CiImageOff className="icon-icon" />
              <div className="event-img">
                <img src={close} alt="" />
              </div>
              <h3> Tanguar Haur Economy Trip With</h3>
              <h3> Bari HouseBoat</h3>
              <div style={{ display: "flex", paddingTop: "12px", margin: "0" }}>
                <MdElectricBolt className="icon-electric" />
                <h4
                  style={{
                    fontSize: "16px",
                    paddingTop: "6px",
                    paddingLeft: "10px",
                  }}
                >
                  From{" "}
                  <span
                    style={{
                      color: "blueviolet",
                      fontSize: "20px",
                      paddingRight: "6px",
                    }}
                  >
                    4500
                  </span>
                  ৳
                </h4>
              </div>
              <div style={{ display: "flex", margin: "0" }}>
                <FcAlarmClock className="icon-clock" />
                <p
                  style={{
                    fontSize: "16px",
                    paddingTop: "8px",
                    paddingLeft: "10px",
                  }}
                >
                  {" "}
                  2 Days & 3 Night
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
