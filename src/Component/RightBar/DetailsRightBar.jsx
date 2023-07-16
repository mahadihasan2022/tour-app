import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { BsTelephonePlusFill } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import "./RightBar.css";

const DetailsRightBar = () => {
  const navigate = useNavigate();
  const { Id } = useParams();
  const { register } = useForm();
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState("");
  const [services, setServices] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { doubleBedType, singleBedType, amount, name, location } = services;

  useEffect(() => {
    fetch(`http://localhost:5000/bestResort/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [Id, setServices]);

  function handleBookings() {
    // console.warn({ date, groupSize, email, name, duration, destination });
    let data = { startDate, name, location, email, endDate, amount, roomType };
    fetch(`http://localhost:5000/resortOrders`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    navigate(`/bookings`);
  }

  return (
    <div className="detailsRightBar">
      <h1>Check-In-Out</h1>
      <div className="check-in-out">
        <div>
          <DatePicker
            selected={startDate}
            onChange={(startDate) => setStartDate(startDate)}
            className="date-picker"
          />
        </div>
        <div>
          <FaLongArrowAltRight className="check-in-out-icon" />
        </div>
        <div>
          <input
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            name="date"
            id="date"
            className="date-picker"
          />
        </div>
      </div>
      <div className="room-list">
        <h1>Room List</h1>
        <p>
          {doubleBedType} <span>/{amount}</span>BDT Per Night{" "}
        </p>
        <p>
          {singleBedType} <span>/{amount}</span>BDT Per Night{" "}
        </p>
      </div>
      <div className="room">
        <h1>Room</h1>
        <select name="" id="" onChange={(e) => setRoomType(e.target.value)}>
          <option value={doubleBedType}>{doubleBedType}</option>
          <option value={singleBedType}>{singleBedType}</option>
        </select>
      </div>
      <div className="phone-number">
        <TextField
          type="email"
          {...register("email", { required: true })}
          id="email"
          label="Email"
          variant="standard"
          className="form-control"
          style={{ margin: "0" }}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="booking-now-btn">
        <button onClick={handleBookings} className="booking">
          Booking Now
        </button>
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
