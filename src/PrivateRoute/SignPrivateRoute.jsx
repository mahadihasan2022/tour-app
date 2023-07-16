import React from "react";
import useAuth from "../Hooks/useAuth";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Users/Profile/Profile";

const SignPrivateRoute = () => {
  const { user } = useAuth();
  return !user?.email ? <SignUp /> : <Profile />;
};

export default SignPrivateRoute;
