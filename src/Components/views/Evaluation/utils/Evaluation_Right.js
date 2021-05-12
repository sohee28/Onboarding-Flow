import React, { useState, useContext, useEffect } from "react";
import userContext from "../../../../index";
import "../Evaluation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

function Evaluation_Right() {
  const { user, setUser } = useContext(userContext);
  const evaluationData = user.Evaluation;
  const evaluationListing = evaluationData.evaluationList;

  console.log(evaluationData);
  const handleDelete = (selected) => {
    const tempEvaluation = evaluationListing.filter(
      (product) => product.product.label !== selected
    );
    setUser({
      ...user,
      Evaluation: {
        ...evaluationData,
        evaluationList: tempEvaluation,
      },
    });
  };

  return (
    <>
      {evaluationListing.length === 0 ? (
        <div className="Evaluation_Right_Container">
          <img src="/Images/icons8-light.gif" alt="" />
          <p className="Evaluation_Right_parafirst">
            Current Usage Should Equal 100%
          </p>
          <p className="Evaluation_Right_parasecond">
            To continue, be share to add percetage usage across cloud providers
            to give vendors an accurate represntation of your current
            environment.
          </p>
        </div>
      ) : (
        <div className="Evaluation_Right_Container2">
          {evaluationListing.map((item) => (
            <div className="Evaluation_Right_Card">
              <p>Evaluation of {item.product.label}</p>
              <button onClick={() => handleDelete(item.product.label)}>
                <FontAwesomeIcon className="delete_icon" icon={faTrashAlt} />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Evaluation_Right;
