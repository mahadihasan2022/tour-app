import React, { useState } from  "react";
import ViewOrder from "../Component/Product/ViewOrder";
import profileImage from '../Source/Image/profileImage.jpg'
import './Order.css';
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [showTab, setShowTap] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();

  const editProfile = () => {
    navigate("/userProfile/email");
  };

  const handleTab = (e) => {
    setShowTap(e);
  };


  return (
    <div className="order">
      <div className="vierOrder pt-5 mt-3">
        <h1>Welcome to our trip tour</h1>
        <h6>You can see your booking progress and update your profile here</h6>
        <div className="cart-cont">
          <h1>Selected Booking</h1>
          <div>
          <ul style={{display:'flex', justifyContent:'center', alignItems:'center'}} class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              className={showTab === 1 ? "nav-link active" : "nav-link"}
              onClick={() => handleTab(1)}
            >
              Package
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className={showTab === 2 ? "nav-link active" : "nav-link"}
              onClick={() => handleTab(2)}
            >
              Resort
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className={showTab === 3 ? "nav-link active" : "nav-link"}
              onClick={() => handleTab(3)}
            >
              Event
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          {/* start tab 1*/}
          <div
            className={
              showTab === 1 ? "tab-pane fade show active" : "tab-pane fade show"
            }
          >
            <h2 className="order-category">Package Booking List</h2>
          </div>
          {/* close tab 1*/}

          {/* start tab 2*/}
          <div
            className={
              showTab === 2 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
                        <h2 className="order-category">Resort Booking List</h2>

          </div>
          {/* close tab 2*/}

          {/* start tab 3*/}
          <div
            className={
              showTab === 3 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
                      <h2 className="order-category">Event Booking List</h2>

          </div>
          {/* close tab 3*/}
        </div>
    </div>

          <ViewOrder />
        </div>
      </div>
      <div className="order-profile">
        <h1>Profile</h1>
        <div className="orderImage">
          <img src={profileImage} alt="" />
        </div>
        <div className="order-btnInfo">
          <button onClick={editProfile} > Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
