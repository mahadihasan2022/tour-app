import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { darkTheme, GlobalStyles, lightTheme } from "./Theme/Theme";
import "./App.css";
import AOS from "aos";
import Header from "./Component/Header/Header";
import Home from "./Pages/Home/Home";

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
        <Route path="/" element={<Home/>} />
        </Routes>
      </ThemeContextProvider.Provider>
    </AdminContext.Provider>
  );
}
export default App;
