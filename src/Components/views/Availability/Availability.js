import React from "react";
import "../../utils/Style/BasicLayout3.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Availability_Left from "./utils/Availability_Left";
import Footer from "../../utils/Footer/Footer";

function Availability() {
  return (
    <div className="Whole_Layout3">
      <Navbar title="Calendar & Availability" />
      <ProgressBar value={91} />
      <div className="Container3">
        <section className="Left3">
          <Availability_Left />
          <Footer back={"/Calendar"} next={"/Payments"} />
        </section>
        <section className="Right3"></section>
      </div>
    </div>
  );
}

export default Availability;
