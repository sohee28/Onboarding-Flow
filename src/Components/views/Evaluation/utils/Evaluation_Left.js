import React, { useState, useContext, useEffect } from "react";
import userContext from "../../../../index";
import "../Evaluation.css";
import Select from "react-select";
import dummyData from "../utils/EvaluationData.json";

function Evaluation_Left() {
  const { user, setUser } = useContext(userContext);
  const evaluationData = user.Evaluation;
  const evaluationListing = evaluationData.evaluationList;
  const [selectedEvaluation, setSelectedEvaluation] = useState({
    product: "",
    exproduct: [],
    date: "",
    role: "",
    purpose: "",
  });

  const handleProductChange = (selectedproduct) => {
    setSelectedEvaluation({
      ...selectedEvaluation,
      product: selectedproduct,
    });
  };

  const handleOtherProduct = (otherproduct) => {
    setSelectedEvaluation({
      ...selectedEvaluation,
      exproduct: otherproduct,
    });
  };

  const handleRadioBtn = (e) => {
    setSelectedEvaluation({
      ...selectedEvaluation,
      role: e.target.value,
    });
  };

  const handleTextArea = (e) => {
    setSelectedEvaluation({
      ...selectedEvaluation,
      purpose: e.target.value,
    });
  };

  const handleData = () => {
    setUser({
      ...user,
      Evaluation: {
        ...evaluationData,
        evaluationList: [...evaluationListing, selectedEvaluation],
        newform: false,
      },
    });
    setSelectedEvaluation({
      product: "",
      exproduct: [],
      date: "",
      role: "",
      purpose: "",
    });
  };

  return (
    <div className="Evaluation_Left_Container">
      <div className="Evaluation_Left_TitleArea">
        <p className="Evaluation_Left_Title">
          What was the last evaluation you participated in?
        </p>
        <p className="Evaluation_Left_SubTitle">
          Your evaluation expertise is the most valuable context you can
          provide.
        </p>
      </div>
      {evaluationData.newform === false ? (
        <button
          className="Evaluation_Left_Addproduct"
          onClick={(e) => {
            setUser({
              ...user,
              Evaluation: { ...evaluationData, newform: true },
            });
          }}
        >
          <p className="Evaluation_Addproduct_btn">Add Evaluation +</p>
        </button>
      ) : (
        <>
          <div className="evaluation_newform">
            <div className="evaluation_select_product">
              <p className="select_product_title">
                Select the product or vendor that you chose at the end of your
                evaluation
              </p>
              <div className="basic-select">
                <Select
                  options={dummyData}
                  value={selectedEvaluation.product}
                  onChange={handleProductChange}
                />
              </div>
            </div>
            <div className="evaluation_other_product">
              <p>What other products did you consider?</p>
              <Select
                isMulti
                name="product"
                options={dummyData}
                className="basic-select"
                classNamePrefix="select"
                value={selectedEvaluation.exproduct}
                onChange={handleOtherProduct}
              />
            </div>
            <div className="evaluation_date">
              <p>When did the evaluation take place?</p>
              <input
                className="evaluation_date_calendar"
                type="date"
                id="start"
                max="2021-05-12"
                onChange={(e) => {
                  setSelectedEvaluation({
                    ...selectedEvaluation,
                    date: e.target.value,
                  });
                }}
              ></input>
            </div>
            <div className="evaluation_role">
              <p>How would you describe yout involvement in this evaluation?</p>
              <div className="evaluation_role_selection">
                <label>
                  <input
                    type="radio"
                    value="Stakeholder"
                    name="role"
                    onChange={handleRadioBtn}
                  />
                  Stakeholder
                </label>
                <label>
                  <input
                    type="radio"
                    value="Project Manager"
                    name="role"
                    onChange={handleRadioBtn}
                  />
                  Project Manager
                </label>
                <label>
                  <input
                    type="radio"
                    value="Buyer"
                    name="role"
                    onChange={handleRadioBtn}
                  />
                  Buyer
                </label>
              </div>
            </div>
            <div className="evaluation_purpose">
              <p>How would you describe the purpose of the evaluation?</p>
              <textarea
                className="evaluation_textarea"
                type="text"
                rows={3}
                onChange={handleTextArea}
                resize="none"
              ></textarea>
            </div>
            <div className="evaluation_save">
              <button onClick={handleData}>Save</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Evaluation_Left;
