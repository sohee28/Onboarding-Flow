import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Footer.css";
import userContext from "../../../index";

function Footer(props) {
  const { user, setUser } = useContext(userContext);
  const evaluationData = user.Evaluation;
  const evaluationListing = evaluationData.evaluationList;
  const [check, setCheck] = useState(false);

  const { back, next } = props;

  const handleCheck = () => {
    if (next === "/TechBio" && check === true) {
      alert("Please add at least one of your evaluation!");
    }
  };
  useEffect(
    () => {
      if (next === "/TechBio" && evaluationListing.length === 0) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    },
    [handleCheck],
    []
  );

  return (
    <div className="Footer">
      <div className="Footer_back">
        <Link
          to={back}
          style={{
            textDecoration: "none",
            color: "rgba(0, 160, 255, 1)",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon className="FooterIcon" icon={faArrowLeft} />
          Back
        </Link>
      </div>
      <div className="Footer_next">
        <Link to={check ? "#" : next}>
          <button onClick={handleCheck}>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
