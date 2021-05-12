import React from "react";
import ProfileNavbar from "./utils/ProfileNavbar";
import "./Profile.css";
import ProfileLeft from "./utils/ProfileLeft";
import ProfileRight from "./utils/ProfileRight";

function Profile() {
  return (
    <div className="Profile">
      <ProfileNavbar />
      <div className="Profile_Container">
        <div className="Profile_Main">
          <div className="Profile_Main_Left">
            <ProfileLeft />
          </div>
          <div className="Profile_Main_Right">
            <ProfileRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
