import React from "react";
import usersSolid from "../../Source/Icon/usersSolid.svg";
import slack from "../../Source/Icon/slack.svg";
import nfc from "../../Source/Icon/nfc.svg";
import contact from '../../Source/Icon/contact.svg';
import faceSmile from '../../Source/Icon/faceSmile.svg';
import message from '../../Source/Icon/message.svg'
import { useNavigate } from "react-router-dom";
import './AboutUs.css'
const AboutUs = () => {
  const navigate = useNavigate();

  const handleOnclick = () =>{
    navigate('/questionBox');
  }
  const HandleClickPrestigious = () =>{
    navigate('/prestigious');
  }
  const handleOnclickCommunity = () =>{
    navigate('/community');
  }
  const handleOurContact = () =>{
    navigate('/contact');
  }
  const handleShowBlogs = () =>{
    navigate('/blogs');
  }
  const handleAddFurom = () =>{
    navigate('/forum');
  }




  return (
   
      <div className="about">
        <div className=" about-container">
          <div className="aboutText-container">
            <h1>
              The Most
            </h1>
            <h2>
              Interesting Digital
            </h2>
            <h3>
              In The World.
            </h3>
          </div>
          <div className="aboutDetails-container">
            <p>
              Blandit semper ac mi montes neque nostra vivamus dictum
              ullamcorper phasellus. Gravida metus viverra massa netus tortor
              nullam pharetra. Nunc leo auctor congue mus convallis scelerisque
              maecenas condimentum dictum dolor.
            </p>
            <div className="about-btn-info">
              <button>
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="aboutCard-container">
            <div className="about-card">
              <img src={usersSolid} alt="" />
            </div>
            <div className="aboutCard-details">
              <h1>
                Fantastic support
              </h1>
              <p>
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="about-btn-info">
                <button onClick={handleOnclick}>
                  Visit Now
                </button>
              </div>
            </div>
          </div>
          <div className="aboutCard-container">
            <div className="about-card">
              <img src={slack} alt="" />
            </div>
            <div className="aboutCard-details">
              <h1>
                Prestigious
              </h1>
              <p>
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="about-btn-info">
                <button onClick={HandleClickPrestigious} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
          <div className="aboutCard-container">
            <div className="about-card">
              <img src={faceSmile} alt="" />
            </div>
            <div className="aboutCard-details">
              <h1>
              Community
              </h1>
              <p>
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="about-btn-info">
                <button onClick={handleOnclickCommunity} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
          <div className="aboutCard-container">
            <div className="about-card">
              <img src={contact} alt="" />
            </div>
            <div className="aboutCard-details">
              <h1>
                Contact Us
              </h1>
              <p>
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="about-btn-info">
                <button onClick={handleOurContact} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
          <div className="aboutCard-container">
            <div className="about-card">
              <img src={nfc} alt="" />
            </div>
            <div className="aboutCard-details">
              <h1>
                Blogs
              </h1>
              <p>
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="about-btn-info">
                <button onClick={handleShowBlogs} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
          <div className="aboutCard-container">
            <div className="about-card">
              <img src={message} alt="" />
            </div>
            <div className="aboutCard-details">
              <h1>
              Forum
              </h1>
              <p>
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="about-btn-info">
                <button onClick={handleAddFurom} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;