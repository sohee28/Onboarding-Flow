import React from "react";

import "../../utils/Style/BasicLayout.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Payments_Left from "./utils/Payments_Left";
import Footer from "../../utils/Footer/Footer";

function Payments() {
  return (
    <div>
      <div className="Whole_Layout">
        <Navbar title="Payments" />
        <ProgressBar value={100} />
        <div className="Container">
          <section className="Left">
            <Payments_Left />
            <Footer back={"/Availability"} next={"/Profile"} />
          </section>
          <section className="Right"></section>
        </div>
      </div>
    </div>
  );
}

export default Payments;
