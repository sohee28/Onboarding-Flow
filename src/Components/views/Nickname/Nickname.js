import React from "react";

import "../../utils/Style/BasicLayout.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Nickname_Right from "./utils/Nickname_Right";
import Nickname_Left from "./utils/Nickname_Left";
import Footer from "../../utils/Footer/Footer";

function Nickname() {
  return (
    <div className="Whole_Layout">
      <Navbar title="Current Environment" />
      <ProgressBar value={18.2} />
      <div className="Container">
        <section className="Left">
          <Nickname_Left />
          <Footer back={"/Description_Title"} next={"/Environment"} />
        </section>
        <section className="Right">
          <Nickname_Right />
        </section>
      </div>
    </div>
  );
}

export default Nickname;
