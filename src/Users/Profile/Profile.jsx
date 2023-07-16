import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./Profile.css";
import useAuth from "../../Hooks/useAuth";

const Profile = () => {
  const { user, updateProfileHandler } = useAuth();
  console.log(user);
  const navigate = useNavigate();

  const { id } = useParams();
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/user?addUser=${email}`, {
        id,
        displayName,
        email,
        address,
        phone,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    navigate("/");
  };

  return (
    <div className="profile">
      <React.Fragment>
        <Container>
          <h2 style={{ paddingTop: "20px", paddingBottom: "30px" }}>
            Update Profile Information
          </h2>
          <div className="profile-content">
            <div className="profile-card">
              <form onSubmit={handleSubmit} className="col g-3">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div>
                    <TextField
                      type="name"
                      id="name"
                      label="Name"
                      variant="standard"
                      className="form-control mt-3 pt-2"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      type="email"
                      id="email"
                      label="Email"
                      variant="standard"
                      className="form-control mt-3 pt-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      type="Phone"
                      id="Phone"
                      label="Phone"
                      variant="standard"
                      className="form-control mt-3 pt-2"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      type="address"
                      id="address"
                      label="Address"
                      variant="standard"
                      className="form-control mt-3 pt-2"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    <button type="submit" className="btn btn-primary mt-4">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Profile;
