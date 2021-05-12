import React, { useState, useContext } from "react";
import "../Environment.css";

function Environment_Right() {
  return (
    <div className="Environment_Right_Container">
      <img src="/Images/icons8-light.gif" alt="" />
      <p className="Environment_Right_parafirst">Add Cloud Environment</p>
      <p className=" Environment_Right_parasecond">
        <span>95%</span> of vendors want to speak with experts operating in
        cloud-enabled enviroments. If that’s you, make sure let them know on
        your profile!
      </p>
    </div>
  );
}

export default Environment_Right;
