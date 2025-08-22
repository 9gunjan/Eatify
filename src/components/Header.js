import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  // let btn_name = "Login";

  const [btn_name, setBtn_name] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL} alt="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus?"Online🟢":"Offline🔴"}</li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btn_name === "Login"
                  ? setBtn_name("Logout")
                  : setBtn_name("Login");
                console.log(btn_name);
              }}
            >
              {btn_name}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
