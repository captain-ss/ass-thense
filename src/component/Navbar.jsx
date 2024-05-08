import React, { useEffect, useState } from "react";
import "../assets/style/style.css";
import Button from "./Button/Button";
import crossImage from "../assets/Images/crossImage.svg";
import logo from "../assets/Images/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isHome, setIsHome] = useState(true);
  const history = useNavigate();
  const location = useLocation();
  useEffect(() => {
    location.pathname !== "/" ? setIsHome(false) : setIsHome(true);
  }, [location.pathname]);
  return (
    <nav className="website-navbar">
      <span>
        <img
          style={{
            cursor: "pointer",
          }}
          src={logo}
          onClick={() => {
            history("/");
          }}
          alt=""
        />
      </span>

      {isHome ? (
        <div>
          <Button
            onClick={() => {
              history("/form");
            }}
            theme="light"
          >
            Get Project
          </Button>
          <Button>Onboard Talent </Button>
        </div>
      ) : (
        <img
          style={{
            cursor: "pointer",
          }}
          src={crossImage}
          alt="Cross"
          onClick={() => {
            history("/");
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
