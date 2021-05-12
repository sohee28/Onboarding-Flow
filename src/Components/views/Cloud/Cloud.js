import React from "react";

import "../../utils/Style/BasicLayout.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Footer from "../../utils/Footer/Footer";
import Cloud_Left from "./utils/Cloud_Left";
import Cloud_Right from "./utils/Cloud_Right";

function Cloud() {
  return (
    <div className="Whole_Layout">
      <Navbar title="Current Environment" />
      <ProgressBar value={36.4} />
      <div className="Container">
        <section className="Left">
          <Cloud_Left />
          <Footer back={"/Environment"} next={"/Orchtools"} />
        </section>
        <section className="Right">
          <Cloud_Right />
        </section>
      </div>
    </div>
  );
}

export default Cloud;
