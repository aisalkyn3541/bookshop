import React from "react";
import logo from "../../img/Logo.png";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { PiHandbagSimple } from "react-icons/pi";

const Header = () => {
  return (
    <div id="header">
        <div className="container">
          <div className="header">
            <div className="header--nav">
            <img src={logo} alt="" />

            <NavLink>Categories</NavLink>
            <NavLink>Recent</NavLink>
            <NavLink>Books</NavLink>
            <NavLink>About Us</NavLink>
          </div>
          <div className="header--icons">
            <h3>
              <AiOutlineSearch />
            </h3>
            <h3>
              <PiHandbagSimple />{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
