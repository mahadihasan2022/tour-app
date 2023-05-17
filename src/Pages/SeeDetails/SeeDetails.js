import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";
import "./SeeDetails.css";
const SeeDetails = () => {
  const { Id } = useParams();
  const [services, setServices] = useState({});
  const [showtab, setShowTap] = useState(1);
  const {
    name,
    img1,
    img2,
    img3,
    img4,
    tittle,
    destination,
    duration,
    tourType,
    groupSize,
    breakfast1,
    breakfast2,
    breakfast3,
    lunch1,
    lunch2,
    lunch3,
    snacks1,
    snacks2,
    snacks3,
    dinner1,
    dinner2,
    dinner3,
  } = services;

  const handletab = (e) => {
    setShowTap(e);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/currentPackage/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [Id, setServices]);
  return (
    <div style={{ margin: "6px" }}>
      <h1>{name}</h1>
      <p>
        <MdLocationPin style={{ color: "red", fontSize: "24px" }} />
        <span style={{ paddingLeft: "6px" }}>{destination}</span>
      </p>
      <hr size="5" color="green" />
      <div className="details-cont">
        <div style={{ display: "flex" }}>
          <h1>
            <BsClock
              style={{ backgroundColor: "green", borderRadius: "50%" }}
            />
          </h1>
          <div style={{ paddingLeft: "16px", paddingTop: "10px" }}>
            <h2 style={{ margin: "0" }}>Duration</h2>
            <p style={{ margin: "0", fontSize: "14px" }}>{duration}</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <h1>
            <BsBagCheck style={{ color: "blue" }} />
          </h1>
          <div style={{ paddingLeft: "16px", paddingTop: "10px" }}>
            <h2 style={{ margin: "0" }}>Tour Type</h2>
            <p style={{ margin: "0", fontSize: "14px" }}>{tourType}</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <h1>
            <BsPeople style={{ color: "lime" }} />
          </h1>
          <div style={{ paddingLeft: "16px", paddingTop: "10px" }}>
            <h2 style={{ margin: "0" }}>Max Group Size</h2>
            <p style={{ margin: "0", fontSize: "14px" }}>{groupSize}</p>
          </div>
        </div>
      </div>
      <div style={{ height: "300" }}>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
              height={300}
              width={300}
            />
          </Carousel.Item>
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
        </Carousel>
      </div>
      <h1 style={{ paddingTop: "14px", fontSize: "26px", margin: "0" }}>
        General Information
      </h1>
      <h4 style={{ paddingTop: "10px", fontSize: "14px", margin: "0" }}>
        {tittle}
      </h4>
      <div>
        <h1 style={{ paddingTop: "28px", fontSize: "26px", margin: "0" }}>
          Food Menu{" "}
        </h1>
      </div>
      <div className="col-sm-12">
        <ul class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              className={showtab === 1 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(1)}
            >
              Day-1
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className={showtab === 2 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(2)}
            >
              Day-2
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              className={showtab === 3 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(3)}
            >
              Day-3
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          {/* start tab 1*/}
          <div
            className={
              showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"
            }
          >
            <h6 style={{ paddingTop: "20px" }}>
              Breakfast :{" "}
              <span style={{ paddingLeft: "36px" }}>{breakfast1}</span>
            </h6>
            <h6 style={{ paddingTop: "20px" }}>
              Lunch : <span style={{ paddingLeft: "36px" }}>{lunch1}</span>
            </h6>
            <h6 style={{ paddingTop: "20px" }}>
              Snacks : <span style={{ paddingLeft: "36px" }}>{snacks1}</span>
            </h6>
            <h6 style={{ paddingTop: "20px" }}>
              Dinner : <span style={{ paddingLeft: "36px" }}>{dinner1}</span>
            </h6>
          </div>
          {/* close tab 1*/}

          {/* start tab 2*/}
          <div
            className={
              showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <h6 style={{ paddingTop: "20px" }}>
              Breakfast :{" "}
              <span style={{ paddingLeft: "36px" }}>{breakfast2}</span>
            </h6>
            <h6 style={{ paddingTop: "20px" }}>
              Lunch : <span style={{ paddingLeft: "36px" }}>{lunch2}</span>
            </h6>
            <h6 style={{ paddingTop: "20px" }}>
              Snacks : <span style={{ paddingLeft: "36px" }}>{snacks2}</span>
            </h6>
            <h6 style={{ paddingTop: "20px" }}>
              Dinner : <span style={{ paddingLeft: "36px" }}>{dinner2}</span>
            </h6>
          </div>
          {/* close tab 2*/}

          {/* start tab 3*/}
          <div
            className={
              showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <h6 style={{ paddingTop: "20px" }}>
              Breakfast :{" "}
              <span style={{ paddingLeft: "36px" }}>{breakfast3}</span>
            </h6>
            <h6 style={{ paddingTop: "20px" }}>
              Lunch : <span style={{ paddingLeft: "36px" }}>{lunch3}</span>
            </h6>
            <h6 style={{ paddingTop: "20px" }}>
              Snacks : <span style={{ paddingLeft: "36px" }}>{snacks3}</span>
            </h6>
            <h6 style={{ paddingTop: "20px" }}>
              Dinner : <span style={{ paddingLeft: "36px" }}>{dinner3}</span>
            </h6>
          </div>
          {/* close tab 3*/}
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
