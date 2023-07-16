import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import "./User.css";

const User = () => {
  const [updateProfile, setUpdateProfile] = useState({});
  const [displayUser, setDisplayUser] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState([]);

  const handleUserName = (e) => {
    const user_name = e.target.value;
    console.log(user_name);
    setDisplayUser(user_name);
  };
  const handleUserEmail = (e) => {
    const user_email = e.target.value;
    console.log(user_email);
    setDisplayEmail(user_email);
  };
  const submitUser = async (e) => {
    e.preventDefault();
    const userData = {
      user_name: displayUser,
      user_email: displayEmail,
    };
    await axios
      .post(`http://localhost:5000/user?addUser`, JSON.stringify(userData))
      .then((result) => {
        setMessage(result.data.message);
        console.log(result.data);
        console.log(result.data.message);
      });
  };
  useEffect(() => {
    const getUserData = async () => {
      const reqUser = await fetch(`http://localhost:5000/user?getUser`);
      const resUser = await reqUser.json();
      console.log(resUser);
      setUserData(await resUser);
    };
    getUserData();
  }, []);

  const handleEdit = (e) => {
    setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
  };
  const handleChange = async (userid) => {
    console.log(userid);
    const reqDeleteUser = await fetch(
      `http://localhost:5000/user?userDelete=${userid}`
    );
    const resDeleteUser = await reqDeleteUser.json();
    console.log(resDeleteUser);
    setMessage(resDeleteUser.sms);
  };

  return (
    <div className="content">
      <React.Fragment>
        <Container>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="mt-4 mb-4 fw-bold">Users Information</h1>
              {message ? (
                <div className="test-success">
                  <h5>{message}</h5>
                </div>
              ) : (
                <></>
              )}
              <form onSubmit={submitUser} className="row g-3">
                {/* <div className="col-md-3">
                <label className="from-label">User Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control p-2"
                  onChange={(e) => handleUserName(e)}
                />
              </div>
              <div className="col-md-3">
                <label className="from-label">User Email</label>
                <input
                  type="text"
                  name="user_email"
                  className="form-control p-2"
                  onChange={(e) => handleUserEmail(e)}
                />
              </div> */}
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "20px" }}
                >
                  <TextField
                    type="name"
                    id="name"
                    label="Name"
                    variant="standard"
                    className="form-control mt-3"
                    onChange={(e) => handleUserName(e)}
                  />
                  <TextField
                    type="email"
                    id="email"
                    label="Email"
                    variant="standard"
                    className="form-control mt-3"
                    onChange={(e) => handleUserEmail(e)}
                  />
                  <div className="col-md-3">
                    <button type="submit" className="btn btn-primary mt-4">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-12 mt-5">
              <table
                style={{ border: "2px solid lime", color: "white" }}
                className="table table-bordered mt-2"
              >
                <thead>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">User Name</th>
                    <th scope="col">User Email</th>
                    <th scope="col">User action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((getUser, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1} </th>
                      <td>{getUser.name}</td>
                      <td>{getUser.email}</td>
                      <td>
                        <Link
                          to={`/userProfile/${getUser._id}`}
                          className="btn btn-success"
                        >
                          Edit
                        </Link>
                        <button
                          onChange={() => handleChange(getUser._id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default User;
