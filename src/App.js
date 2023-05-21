import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { darkTheme, GlobalStyles, lightTheme } from "./Theme/Theme";
import "./App.css";
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

AOS.init();

export const ThemeContextProvider = createContext();
export const AdminContext = createContext();
// #0dcaf0
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [admin, setAdmin] = useState({});
  return (
    <AdminContext.Provider value={[admin, setAdmin]}>
      <ThemeContextProvider.Provider value={[isDarkTheme, setIsDarkTheme]}>
        <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package" element={<Package />} />
          <Route path="/event" element={<Event />} />
          <Route path="/resort" element={<Resort />} />
          <Route path="/currentPackage/:Id" element={<Layout />}>
            <Route path="/currentPackage/:Id" element={<SeeDetails />} />
          </Route>
          <Route path="/resort" element={<ResortLayout />}>
            <Route path="/resort" element={<Resort />} />
          </Route>
          <Route path="/bestResort/:Id" element={<DetailsLayout />}>
            <Route path="/bestResort/:Id" element={<ResortDetails />} />
          </Route>
        </Routes>
      </ThemeContextProvider.Provider>
    </AdminContext.Provider>
  );
}
export default App;
