import React, { useContext } from "react";

import "../../utils/Style/BasicLayout.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Description_Title_Left from "./utils/Description_Title_Left";
import Description_Title_Right from "./utils/Description_Title_Right";
import Footer from "../../utils/Footer/Footer";

function Description_Title() {
  return (
    <div className="Whole_Layout">
      <Navbar title="Description and title" />
      <ProgressBar value={9.1} />
      <div className="Container">
        <section className="Left">
          <Description_Title_Left />
          <Footer back={"/"} next={"/Nickname"} />
        </section>
        <section className="Right">
          <Description_Title_Right />
        </section>
      </div>
    </div>
  );
}

export default Description_Title;
