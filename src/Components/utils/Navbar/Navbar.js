import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="left_nav">
          <img
            className="logo"
            src="/Images/sagetap_logo.png"
            alt="sagetaplogo"
          />
          <p>{props.title}</p>
        </div>
        {props.title === "Description and title" ? (
          <div className="right_nav">
            <p className="right_nav_saved">Saved a few seconds ago</p>
            <p className="right_nav_saveexit">Save and Exit</p>
          </div>
        ) : (
          <div className="right_nav_ex"></div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
