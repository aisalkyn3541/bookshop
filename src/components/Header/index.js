import React from 'react'
import logo from "../../img/Logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <div className="header">
        <div className="header--nav">
          <img src={logo} alt="" />
          <nav>
            <NavLink>Categories</NavLink>
            <NavLink>Recent</NavLink>
            <NavLink>Books</NavLink>
            <NavLink>About Us</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header