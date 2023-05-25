import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { googleSignInHandler, createUserWithEmailAndPasswordHandler } =
    useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, password, confirmPassword } = data;
    if (password === confirmPassword) {
      createUserWithEmailAndPasswordHandler(name, email, password);
      reset();
    }
  };

  const handleVisitLoginPage = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="signUp">
        <div className="sign-card">
          <div className="sign-left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1> Register Now...</h1>
              <TextField
                {...register("name", { required: true })}
                id="Name"
                label="Name"
                variant="standard"
                className="form-control mt-3"
              />
              <TextField
                type="email"
                {...register("email", { required: true })}
                id="Email"
                label="Email"
                variant="standard"
                className="form-control mt-3"
              />
              <TextField
                type={isShowPassword ? "text" : "password"}
                {...register("password", { required: true, minLength: 6 })}
                id="Password"
                label="Password"
                variant="standard"
                className="form-control mt-3"
              />
              {errors.password && (
                <p className="text-start text-danger">
                  Give Password minimum 6 characters
                </p>
              )}
              <TextField
                type={isShowPassword ? "text" : "password"}
                {...register("confirmPassword", { required: true })}
                id="Confirm-Password"
                label="Confirm Password"
                variant="standard"
                className="form-control mt-3"
              />
              <div className="sign-pass-handle">
                <input
                  type="checkbox"
                  name=""
                  onClick={() => setIsShowPassword(!isShowPassword)}
                />{" "}
                show password
              </div>
              <div className="sign-btn">
                <input type="submit" value="Sign in" />
              </div>
         
            </form>
            <div className="primary-sign-btn">
              <h2 style={{ textAlign: "center", margin: "0" }}>
              ------------Or------------
            </h2>
            <button onClick={googleSignInHandler} className="btn-signBtn">
              <span className="text-success rounded-circle p-2">
              <FcGoogle style={{fontSize:'40px'}}/>
              
              </span>
              Continue with Google
            </button>
              </div>
          </div>
          <div className="vertical"></div>
          <div className="sign-right">
            <h1>Welcome To Our Website</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              veritatis, labore accusamus pariatur quas cumque debitis neque?
              Tempore, perspiciatis officia dicta et reprehenderit fuga animi,
              consequuntur delectus aut quae rerum?
            </p>
            <span>If you have already an account !!..</span>
            <div className="login-handle-btn">
              <button onClick={handleVisitLoginPage}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
