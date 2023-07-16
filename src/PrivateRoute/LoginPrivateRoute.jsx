import React from "react";
import useAuth from "../Hooks/useAuth";
import Profile from "../Users/Profile/Profile";
import Login from "../Pages/Login/Login";

const LoginPrivateRoute = () => {
  const { user } = useAuth();
  return !user?.email ? <Login /> : <Profile />;
};

export default LoginPrivateRoute;
