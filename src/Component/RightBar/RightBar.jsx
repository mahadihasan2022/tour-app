import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { BsTelephonePlusFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import "./RightBar.css";


const RightBar = () => {
  const navigate = useNavigate();
  const { register } = useForm();
  const { Id } = useParams();
  const [services, setServices] = useState({});
  const [date, setDate] = useState(new Date());
  const [email, setEamil] = useState("");
  const { groupSize, name, duration, destination, } = services;



  useEffect(() => {
    fetch(`http://localhost:5000/currentPackage/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [Id, setServices]);



  function handlePurchase()
   {
    // console.warn({ date, groupSize, email, name, duration, destination });
    let data = { date, groupSize, duration, name, destination, email }
    fetch( `http://localhost:5000/orders`, {
      
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
    navigate(`/bookings`);
     
  };













  return (
    <div className="rightbar">
      <h1>Want To Purchase</h1>
   <div className="calender" style={{ fontSize: "12px", color: "black" }}>
        <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate} 
 />
      </div>
      <p> You have selected: {format(date, 'PP')} </p>
      <div
        style={{
          display: "grid",
          paddingBottom:'10px',
          gridTemplateColumns: "repeat(2, 1fr)",
          paddingTop: "8px",
        }}
      >
        <div>
          <h2 style={{ textAlign: "center" }}>Adult</h2>
        </div>
        <div>
          <h2  style={{ textAlign: "center" }}>{groupSize}</h2>
        </div>
      </div>
      <div className="phone-number">
        <TextField
            type="email"
            {...register("email", { required: true })}
            id="email"
            label="Email"
            variant="standard"
            className="form-control"
            style={{margin:'0'}}
            onChange={(e) => setEamil(e.target.value)}
            required
          />
      </div>
      <div className="btn-btn-purchase">
        <button onClick={handlePurchase}>Booking Now</button>
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

export default RightBar;
