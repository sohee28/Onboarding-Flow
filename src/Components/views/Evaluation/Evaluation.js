import React from "react";

import "../../utils/Style/BasicLayout.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Evaluation_Right from "./utils/Evaluation_Right";
import Evaluation_Left from "./utils/Evaluation_Left";
import Footer from "../../utils/Footer/Footer";

function Evaluation() {
  return (
    <div className="Whole_Layout">
      <Navbar title="Current Environment" />
      <ProgressBar value={63.6} />
      <div className="Container">
        <section className="Left">
          <Evaluation_Left />
          <Footer back={"/Products"} next={"/TechBio"} />
        </section>
        <section className="Right">
          <Evaluation_Right />
        </section>
      </div>
    </div>
  );
}

export default Evaluation;
