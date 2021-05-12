import React, { useContext } from "react";
import "../Nickname.css";

import userContext from "../../../../index";

function Nickname_Right() {
  const { user, setUser } = useContext(userContext);
  const userData = user.user;

  return (
    <div className="Nickname_Right_Container">
      <p className="Nickname_Right_Title">How your profile is displayed : </p>
      <div className="Nickname_preview">
        <div className="Nickname_preview_1">
          <div className="Nickname_preview1_left">
            <img src="/Images/icon8-profile.png" alt="" />
          </div>
          <div className="Nickname_preview1_right">
            {userData.nicknamestatue === false ? (
              <p className="Nickname_preview1_name">
                {userData.fName} {userData.lName}
              </p>
            ) : (
              <p className="Nickname_preview1_name">{userData.nickname}</p>
            )}
            <p className="Nickname_preview1_jobtitle">
              {userData.jobTitle} at {userData.industry} Company
            </p>
            <div className="Nickname_preview1_Detail">
              <p className="Nickname_preview1_location">
                <img src="/Images/icons8-place-marker.png" alt="location" />
                {userData.location}{" "}
              </p>
              <p className="vertical_line">|</p>
              <p className="Nickname_preview1_companysize">
                <img src="/Images/icons8-employee.png" alt="business" />
                {userData.companySize}
              </p>
            </div>
          </div>
        </div>
        <div className="Nickname_preview_2">
          <div className="Nickname_preview2_colorline"></div>
          <div className="Nickname_preview2_colorline"></div>
          <div className="Nickname_preview2_colorline"></div>
        </div>
        <div className="Nickname_preview_3">
          <div className="Nickname_preview3_colorline"></div>
        </div>
        <div className="Nickname_preview_4">
          <div className="Nickname_preview4_colorbox"></div>
          <div className="Nickname_preview4_colorbox"></div>
          <div className="Nickname_preview4_colorbox"></div>
          <div className="Nickname_preview4_colorbox"></div>
          <div className="Nickname_preview4_colorbox"></div>
          <div className="Nickname_preview4_colorbox"></div>
        </div>
      </div>
    </div>
  );
}

export default Nickname_Right;
