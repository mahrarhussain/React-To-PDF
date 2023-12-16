import React from "react";

const Navbar = ({ onIconClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-icon" onClick={onIconClick}>
        {/* Replace the following with your desired icon */}
        <span>📄</span>
      </div>
      <div className="navbar-title">Art By Ahrar</div>
    </nav>
  );
};

export default Navbar;
