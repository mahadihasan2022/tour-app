import { createContext, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { darkTheme, GlobalStyles, lightTheme } from "./Theme/Theme";
import AOS from "aos";
import Header from "./Component/Header/Header";
import Home from "./Pages/Home/Home";
import SeeDetails from "./Pages/SeeDetails/SeeDetails";
import Layout from "./Layout/Layout";
import Package from "./Pages/Package/Package";
import Event from "./Pages/Event/Event";
import Resort from "./Pages/Resort/Resort";
import ResortLayout from "./Layout/ResortLayout";
import DetailsLayout from "./Layout/DetailsLayout";
import ResortDetails from "./Pages/ResortDetails/ResortDetails";
import AboutUs from "./Pages/AboutUs/AboutUs";
import QuestionBox from "./Others/QuestionBox/QuestionBox";
import Prestigious from "./Others/Prestigious/Prestigious";
import Community from "./Others/Community/Community";
import ContactUs from "./Others/ContactUs/ContactUs";
import ForumBox from "./Others/ForumBox/ForumBox";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Users/Profile/Profile";
import User from "./Users/User/User";
import LoginPrivateRoute from "./PrivateRoute/LoginPrivateRoute";
import Order from "./Payment/Order";
import RequireAuth from "./PrivateRoute/RequireAuth";
import SignPrivateRoute from "./PrivateRoute/SignPrivateRoute";

AOS.init();

export const ThemeContextProvider = createContext();
export const AdminContext = createContext();
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [admin, setAdmin] = useState({});
  const { email } = useParams();

  return (
    <AdminContext.Provider value={[admin, setAdmin]}>
      <ThemeContextProvider.Provider value={[isDarkTheme, setIsDarkTheme]}>
        <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package" element={<Package />} />
          <Route path="/event" element={<Event />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/questionBox" element={<QuestionBox />} />
          <Route path="/prestigious" element={<Prestigious />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/forum" element={<ForumBox />} />
          <Route path="/currentPackage/:Id" element={<Layout />}>
            <Route path="/currentPackage/:Id" element={<SeeDetails />} />
          </Route>
          <Route path="/resort" element={<ResortLayout />}>
            <Route path="/resort" element={<Resort />} />
          </Route>
          <Route path="/bestResort/:Id" element={<DetailsLayout />}>
            <Route path="/bestResort/:Id" element={<ResortDetails />} />
          </Route>
          <Route element={<LoginPrivateRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<SignPrivateRoute />}>
            <Route path="/signUp" element={<SignUp />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path={`/bookings`} element={<Order />} />
          </Route>
          <Route path="/users" element={<User />} />
          <Route path="/userProfile/:id" element={<Profile />} />
        </Routes>
      </ThemeContextProvider.Provider>
    </AdminContext.Provider>
  );
}
export default App;
