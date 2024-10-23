import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeContextProvider } from "../../App";
import useAuth from "../../Hooks/useAuth";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";


const Header = () => {
  const { user, logoutHandler } = useAuth();
  const navigate = useNavigate();

  const userProfile = () => {
    navigate("/userProfile/email");
  };

  const [isDarkTheme, setIsDarkTheme] = useContext(ThemeContextProvider);
  const location = useLocation();
  // console.log(location.pathname);
  const path = location.pathname;
  const onMouseOverHandler = (e) => {
    e.target.style.background = "#00bbff79";
    e.target.style.color = isDarkTheme ? "#dbdbdb" : "#303030";
  };
  const onMouseOutHandler = (e) => {
    e.target.style.background = "none";
    e.target.style.color = isDarkTheme ? "#dbdbdb" : "#303030";
  };
  const linkStyle = {
    width: "80px",
    textDecoration: "none",
    fontWeight: "bold",
    color: isDarkTheme ? "#dbdbdb" : "#303030",
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand
          style={{ fontSize: "30px" }}
          href="/"
          className={`btn text-info header-website-font fst-italic fw-bold `}
        >
          Trip Tour
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={"bg-info"} />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="ms-auto">
            <Link
              style={linkStyle}
              onMouseOver={onMouseOverHandler}
              onMouseOut={onMouseOutHandler}
              className={`btn m-1 ${path === "/" && "bg-info"}`}
              to="/"
            >
              Home
            </Link>
            <Link
              style={linkStyle}
              onMouseOver={onMouseOverHandler}
              onMouseOut={onMouseOutHandler}
              className={`btn m-1 ${path === "/[package]" && "bg-info"}`}
              to="/package"
            >
              Package
            </Link>
            <Link
              style={linkStyle}
              onMouseOver={onMouseOverHandler}
              onMouseOut={onMouseOutHandler}
              className={`btn m-1 ${path === "/event" && "bg-info"}`}
              to="/event"
            >
              Event
            </Link>
            <Link
              style={linkStyle}
              onMouseOver={onMouseOverHandler}
              onMouseOut={onMouseOutHandler}
              className={`btn m-1 ${path === "/resort" && "bg-info"}`}
              to="/resort"
            >
              Resort
            </Link>
            <Link
              style={linkStyle}
              onMouseOver={onMouseOverHandler}
              onMouseOut={onMouseOutHandler}
              className={`btn m-1 ${path === "/aboutUs" && "bg-info"}`}
              to="/aboutUs"
            >
              About
            </Link>
            <div className="end-right">
              {user?.email ? (
                <button
                  onClick={logoutHandler}
                  style={{
                    textDecoration: "none",
                    backgroundColor: "indianred",
                    fontStyle: "italic",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                    padding: "0px 8px",
                    margin: "6px",
                    borderRadius: "4px",
                  }}
                  className="logout"
                >
                  Logout
                </button>
              ) : (
                <Link
                  style={linkStyle}
                  onMouseOver={onMouseOverHandler}
                  onMouseOut={onMouseOutHandler}
                  className={`btn m-1 ${path === "/login" && "bg-info"}`}
                  to="/login"
                >
                  Login
                </Link>
              )}
              <div
                onClick={userProfile}
                style={{
                  height: "40px",
                  width: "40px",
                  overflow: "hidden",
                  textAlign: "center",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={`btn m-1 ${isDarkTheme ? "btn-light" : "btn-dark"}`}
              >
                {user?.photoURL ? (
                  <img
                    style={{ width: 50, borderRadius: "50%" }}
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <div style={{ fontSize: "45px" }}>
                    <PermIdentityOutlinedIcon
                      style={{
                        fontSize: "45px",
                        paddingBottom: "",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "blue",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <h4
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                className={`btn m-1 ${isDarkTheme ? "btn-light" : "btn-dark"}`}
                onClick={() => setIsDarkTheme(!isDarkTheme)}
              >
                {isDarkTheme ? (
                  <FontAwesomeIcon icon={faMoon} />
                ) : (
                  <FontAwesomeIcon icon={faLightbulb} />
                )}
              </h4>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
