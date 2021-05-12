import React from "react";

import "../../utils/Style/BasicLayout.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import TechBio_Right from "./utils/TechBio_Right";
import TechBio_Left from "./utils/TechBio_Left";
import Footer from "../../utils/Footer/Footer";

function TechBio() {
  return (
    <div className="Whole_Layout">
      <Navbar title="Current Environment" />
      <ProgressBar value={72.8} />
      <div className="Container">
        <section className="Left">
          <TechBio_Left />
          <Footer back={"/Evaluation"} next={"/Calendar"} />
        </section>
        <section className="Right">
          <TechBio_Right />
        </section>
      </div>
    </div>
  );
}

export default TechBio;
