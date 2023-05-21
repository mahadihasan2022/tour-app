import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { BsTelephonePlusFill } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import "./RightBar.css";



const DetailsRightBar = () => {
    const { Id } = useParams();
    const [services, setServices] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  const { doubleBedType, singleBedType, amount  } = services;


  useEffect(() => {
    fetch(`http://localhost:5000/bestResort/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [Id, setServices]);

  return (
    <div className="detailsRightBar">
        <h1>Check-In-Out</h1>
      <div className="check-in-out">
        <div>
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="date-picker"
          />
        </div>
        <div>
            <FaLongArrowAltRight className="check-in-out-icon"/>
        </div>
        <div>
        <input type="date" name="date" id="date" className="date-picker" />
        </div>
      </div>
      <div className="room-list">
        <h1>Room List</h1>
        <p>{doubleBedType} <span>/{amount}</span>BDT Per Night </p>
        <p>{singleBedType} <span>/{amount}</span>BDT Per Night </p>
      </div>
      <div className="room">
        <h1>Room</h1>
            <select name="" id="">
                <option value={doubleBedType}>{doubleBedType}</option>
                <option value={singleBedType}>{singleBedType}</option>
            </select>
      </div>
      <div className="booking-now-btn">
        <button className="booking">Booking Now</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "8px",
        }}
      >
        <div>
          <h3 style={{ fontSize: "10px" }}>Help Center</h3>
        </div>
        <div>
          <h2 style={{ fontSize: "10px" }}>
            <BsTelephonePlusFill style={{ color: "green" }} />{" "}
            <span>+8801409117333</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DetailsRightBar;
