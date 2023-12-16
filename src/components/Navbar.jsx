import React from "react";
import navbarIcon from "../assets/icons/Logo-Icon.png"

const Navbar = ({ onIconClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-icon" onClick={onIconClick}>
        <img src={navbarIcon} alt="navbar"  />
      </div>
      {/* <div className="navbar-title">BinaryArt By Ahrar</div> */}
    </nav>
  );
};

export default Navbar;
