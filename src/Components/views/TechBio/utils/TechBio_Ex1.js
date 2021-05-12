import React, { useContext } from "react";
import "../TechBio.css";

function TechBio_Ex1() {
  return (
    <div className="TechBio_preview">
      <div className="TechBio_preview_title">
        <p> Get inspiration from top-rated experts on Sagetap</p>
      </div>
      <div className="TechBio_preview_1">
        <div className="TechBio_preview1_left">
          <img src="/Images/icon8-profile.png" alt="" />
        </div>
        <div className="TechBio_preview1_right">
          <p className="TechBio_preview1_name">Eric</p>

          <p className="TechBio_preview1_jobtitle">
            Sr. Consultant | Consulting Services
          </p>
          <div className="TechBio_preview1_Detail">
            <p className="TechBio_preview1_location">
              <img src="/Images/icons8-place-marker.png" alt="location" />
              San Franciso, CA
            </p>
            <p className="vertical_line">|</p>
            <p className="TechBio_preview1_companysize">
              <img src="/Images/icons8-employee.png" alt="business" />
              11-50 employees
            </p>
          </div>
          <div className="TechBio_Rate">
            <img src="/Images/icons8-star-filled.gif" alt="rate" />
            4.00 / 5
          </div>
        </div>
      </div>
      <div className="TechBio_preview_2">
        <p>
          Located in a quaint neighborhood, this Richmond Marina home is located
          16 miles away from San Francisco & 12 miles to San Rafael. Relax by
          the fireplace, spend time in a lagoon-view balcony with friends, or
          read your favorite books in the bedroom where you can hear the
          soothing nearby water fountain.
        </p>
      </div>
    </div>
  );
}

export default TechBio_Ex1;
