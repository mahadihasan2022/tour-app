import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import sajek from "../../Source/Video/sajek.mp4";
import { FcGoogle } from "react-icons/fc";
import { GiCheckMark } from "react-icons/gi";
import { AiFillEye } from "react-icons/ai";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="form-box">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
        src={sajek}
      ></video>
      <div className="form-level">
        <form>
          <h1>Login Us</h1>
          <TextField
            type="email"
            {...register("email", { required: true })}
            id="Email"
            label="Email"
            variant="standard"
            className="form-control mt-3"
            required
          />
          <TextField
            type={isShowPassword ? "text" : "password"}
            {...register("password", { required: true, minLength: 6 })}
            id="Password"
            label="Password"
            variant="standard"
            className="form-control mt-3"
            required
          />
          <div className="login-btn">
            <button className="btn-btn-login">Login</button>
          </div>
          <div className="form-route">
            <div className="checkbox">
              <h6 className="remind">
                <input
                  type="checkbox"
                  className="checkout"
                  name=""
                  onClick={() => setIsShowPassword(!isShowPassword)}
                />
                Show Password
              </h6>
              <h6 className="forget">Forgat Password</h6>
            </div>
            <div className="register">
              <p>
                Don't you have an account?
                <Link to='/signUp' style={{ color: "burlywood", fontSize: "24px" }}>
                  <GiCheckMark style={{ color: "green", fontSize: "28px" }} />{" "}
                  Create Account
                </Link>
              </p>
            </div>
          </div>
          <div className="login-btn">
            <button className="">
              <span className="">
                <FcGoogle
                  style={{ fontSize: "30px", backGround: "transparent" }}
                />
              </span>
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
