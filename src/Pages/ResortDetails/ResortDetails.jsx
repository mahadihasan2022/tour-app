import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import "./ResortDetails.css";

const ResortDetails = () => {
  const { Id } = useParams();
  const [services, setServices] = useState({});
  const [showtab, setShowTap] = useState(1);
  const {
    name,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    location,
    resortDetails,
    facilities1,
    facilities2,
    facilities3,
    facilities4,
    facilities5,
    facilities6,
    facilities7,
    doubleBedType,
    amount,
    doubleBedImg,
    doubleBedTittle1,
    doubleBedTittle2,
    doubleBedTittle3,
    doubleBedTittle4,
    singleBedImg,
    singleBedTittle1,
    singleBedTittle2,
    singleBedTittle3,
    singleBedTittle4,
    singleBedType,
    notes,
    email,
    phone,
    address,
  } = services;

  useEffect(() => {
    fetch(`http://localhost:5000/bestResort/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [Id, setServices]);
  return (
    <div className="resortDetails">
      <div className="resortDetails-container">
        <h1>{name}</h1>
        <div className="resort-header">
          <div>
            <MdLocationPin style={{ color: "red", fontSize: "24px" }} />
            <span style={{ paddingLeft: "6px" }}>{location}</span>
          </div>
          <div>
            <FiShare2 style={{ fontSize: "20px" }} />
            <span
              style={{ paddingLeft: "10px", color: "lime", fontWeight: "bold" }}
            >
              Share Via
            </span>
            <FaFacebook
              style={{
                fontSize: "32px",
                color: "#2563eb",
                paddingLeft: "10px",
              }}
            />
            <FaTwitter
              style={{ fontSize: "32px", color: "yellow", paddingLeft: "10px" }}
            />
          </div>
        </div>
        <hr size="5" color="lime" />
      </div>
      <div style={{ height: "300" }}>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
              height={300}
              width={300}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
              height={300}
              width={300}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="Third slide"
              height={300}
              width={300}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img5}
              alt="Third slide"
              height={300}
              width={300}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img6}
              alt="Third slide"
              height={300}
              width={300}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img7}
              alt="Third slide"
              height={300}
              width={300}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="resortDetails-type">
        <h2>RESORT DETAILS</h2>
        <p>{resortDetails}</p>
      </div>
      <div className="resortDetails-feature">
        <h2>FACILITIES</h2>
        <h3>{facilities1}</h3>
        <p>{facilities2}</p>
        <p>{facilities3}</p>
        <p>{facilities4}</p>
        <p>{facilities5}</p>
        <p>{facilities6}</p>
        <p>{facilities7}</p>
      </div>
      <div className="resortDetails-doubleBed">
        <h4>{doubleBedType}</h4>
        <h4>{amount}</h4>
      </div>
      <div className="resort-bedDetails">
        <div className="bedDetails-tittle">
          <p>{doubleBedTittle1}</p>
          <p>{doubleBedTittle2}</p>
          <p>{doubleBedTittle3}</p>
          <p>{doubleBedTittle4}</p>
        </div>
        <div className="bedDetails-photo">
          <img src={doubleBedImg} alt="" />
        </div>
      </div>
      <div className="resortDetails-singleBed">
        <h4>{singleBedType}</h4>
        <h4>{amount}</h4>
      </div>
      <div className="resort-bedDetails">
        <div className="bedDetails-tittle">
          <p>{singleBedTittle1}</p>
          <p>{singleBedTittle2}</p>
          <p>{singleBedTittle3}</p>
          <p>{singleBedTittle4}</p>
        </div>
        <div className="bedDetails-photo">
          <img src={singleBedImg} alt="" />
        </div>
      </div>
      <div className="note">
        <h5>Notes</h5>
        <p>{notes}</p>
      </div>
      <div style={{ paddingBottom: "50px" }}>
        <h4 style={{ paddingTop: "30px" }}> Contacts</h4>
        <p style={{ paddingTop: "10px", margin: "0" }}>Email: {email}</p>
        <p style={{ margin: "0" }}>Phone: {phone}</p>
        <p style={{ margin: "0" }}>Address: {address}</p>
      </div>
    </div>
  );
};

export default ResortDetails;
