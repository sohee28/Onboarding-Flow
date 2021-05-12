import React, { useContext } from "react";

import "../../utils/Style/BasicLayout.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Footer from "../../utils/Footer/Footer";
import Environment_Left from "./utils/Environment_Left";
import Environment_Right from "./utils/Environment_Right";
import userContext from "../../../index";

function Environment() {
  const { user, setUser } = useContext(userContext);
  const userData = user.user;
  console.log(user);

  return (
    <div className="Whole_Layout">
      <Navbar title="Current Environment" />
      <ProgressBar value={27.3} />
      <div className="Container">
        <section className="Left">
          <Environment_Left />
          <Footer
            back={"/Nickname"}
            next={
              userData.environment === "100% On-prem" ? "/Orchtools" : "/Cloud"
            }
          />
        </section>
        <section className="Right">
          <Environment_Right />
        </section>
      </div>
    </div>
  );
}

export default Environment;
