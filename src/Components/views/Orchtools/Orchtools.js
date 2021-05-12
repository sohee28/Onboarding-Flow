import React from "react";

import "../../utils/Style/BasicLayout.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Footer from "../../utils/Footer/Footer";
import Orchtools_Left from "./utils/Orchtools_Left";
import Orchtools_Right from "./utils/Orchtools_Right";

function Orchtools() {
  return (
    <div className="Whole_Layout">
      <Navbar title="Current Environment" />
      <ProgressBar value={45.5} />
      <div className="Container">
        <section className="Left">
          <Orchtools_Left />
          <Footer back={"/Cloud"} next={"/Products"} />
        </section>
        <section className="Right">
          <Orchtools_Right />
        </section>
      </div>
    </div>
  );
}

export default Orchtools;
