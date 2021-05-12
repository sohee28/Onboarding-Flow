import React from "react";
import "./ProfileNavbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

function ProfileNavbar() {
  return (
    <div className="ProfileNavbar">
      <nav className="Navbar">
        <div className="container">
          <div className="left_nav">
            <img
              className="logo"
              src="/Images/sagetap_logo.png"
              alt="sagetaplogo"
            />
            <p>Sagetap</p>
          </div>
          <div className="right_nav">
            <p className="right_nav_profile">
              <FontAwesomeIcon icon={faUser} />
            </p>
            <p className="right_nav_contents">
              <FontAwesomeIcon icon={faFolder} />
            </p>
            <p className="right_nav_settings">
              <FontAwesomeIcon icon={faCog} />
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ProfileNavbar;
