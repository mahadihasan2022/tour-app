import React from "react";
import Typewriter from "typewriter-effect";
import { GiSelfLove } from "react-icons/gi";
import { BsTelephonePlusFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { TfiGoogle } from "react-icons/tfi";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <hr size="4" color="green" />
        <h2>
          We'd{" "}
          <span style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            <GiSelfLove className="contact-icon" />
          </span>{" "}
          To Help..
        </h2>
        <p>
          <Typewriter
            options={{
              strings: [
                "We like to create thing with fun,open minded people. Feel free to say hello!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <div className="contact-option">
        <div className="contact-message">
          <div className="message-field">
            <input type="text" placeholder="name" />
          </div>
          <div className="message-field">
            <input type="email" name="" id="" placeholder="@email" />
          </div>
          <div className="comment-field">
            <input type="text" placeholder="write something..." />
          </div>
          <div className="contact-btn">
            <button>Send</button>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-num">
            <p>
              <BsTelephonePlusFill
                style={{ textAlign: "start", fontSize: "40px", color: "green" }}
              />
            </p>
            <span style={{ textAlign: "center" }}>+8801409117333</span>
          </div>
          <div className="contact-email">
            <p>
              <HiOutlineMail
                style={{
                  textAlign: "start",
                  fontSize: "40px",
                  color: "yellow",
                }}
              />
            </p>
            <span style={{ textAlign: "center" }}>
              mahadi35-2848@diu.edu.bd
            </span>
          </div>
          <div className="contact-address">
            <p>
              <ImLocation2
                style={{ textAlign: "start", fontSize: "40px", color: "red" }}
              />
            </p>
            <span style={{ textAlign: "center" }}>
              Dhanmondi 32, Mirpur Road Dhaka 1207
            </span>
          </div>
          <hr size="5" color="lime" />
          <div className="contact-logo">
            <p>
              <AiFillFacebook style={{ fontSize: "40px", color: "cyan" }} />
            </p>
            <p>
              <AiFillTwitterCircle
                style={{ fontSize: "40px", color: "pink" }}
              />
            </p>
            <p>
              <BsLinkedin style={{ fontSize: "40px", color: "blue" }} />
            </p>
            <p>
              <BsInstagram style={{ fontSize: "40px", color: "orangered" }} />
            </p>
            <p>
              <TfiGoogle style={{ fontSize: "40px", color: "greenyellow" }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
