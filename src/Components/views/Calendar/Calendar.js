import React from "react";

import "../../utils/Style/BasicLayout.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Calendar_Left from "./utils/Calendar_Left";
import Footer from "../../utils/Footer/Footer";

function Calendar() {
  return (
    <div className="Whole_Layout">
      <Navbar title="Calendar & Availability" />
      <ProgressBar value={81.9} />
      <div className="Container">
        <section className="Left">
          <Calendar_Left />
          {/* back="techbio" next='availablity */}
          <Footer back={"/TechBio"} next={"/Availability"} />
        </section>
        <section className="Right"></section>
      </div>
    </div>
  );
}

export default Calendar;
