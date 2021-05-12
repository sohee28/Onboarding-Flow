import React from "react";
import "../Description_Title.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Description_Title_Right() {
  return (
    <div className="Description_Right_Container">
      <img src="/Images/icons8-light.gif" alt="" />
      <p className="Description_parafirst">
        Cloud Architects are in high demand!
      </p>
      <p className="Description_parasecond">
        Refer a cloud archtiect and earn 10% of what they earn in their first 12
        months on sagetap!
      </p>
      <p className="Description_parathird">
        Refer & Earn
        <FontAwesomeIcon className="Description_Icon" icon={faChevronDown} />
      </p>
    </div>
  );
}

export default Description_Title_Right;
