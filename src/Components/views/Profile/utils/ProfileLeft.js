import React, { useState, useContext, useEffect } from "react";
import userContext from "../../../../index";
import "../utils/ProfileNavbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

function ProfileLeft() {
  const { user, setUser } = useContext(userContext);
  const userData = user.user;

  return (
    <div className="ProfileLeft">
      <FontAwesomeIcon className="edit_icon" icon={faEdit} />

      <img src="/Images/profile-pic.jpg" alt="" />
      <div className="ProfileLeft_userInfo">
        {userData.nicknamestatue === false ? (
          <p className="ProfileLeft_name">SoHee Bae</p>
        ) : (
          <p className="ProfileLeft_name">{userData.nickname}</p>
        )}
        <p className="work_line">Information</p>
        <div className="profile_detail_info">
          <p className="ProfileLeft_jobTitle">
            Job Title <span> {userData.jobTitle}</span>
          </p>
          <p className="ProfileLeft_industry">
            Industry <span> {userData.industry}</span>
          </p>
          <p className="ProfileLeft_companySize">
            Company <span> {userData.companySize}</span>
          </p>
          <p className="ProfileLeft_location">
            Location <span> {userData.location}</span>
          </p>
        </div>
      </div>
      <p className="tech_bio">Bio</p>
      <div className="ProfileLeft_techBio">
        <p className="ProfileLeft_techBio_Detail">{userData.techBio}</p>
      </div>
    </div>
  );
}

export default ProfileLeft;
