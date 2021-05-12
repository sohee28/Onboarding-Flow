import React from "react";
import "./ProgressBar.css";

function ProgressBar(props) {
  const Progress_Bar = (props) => {
    return (
      <div className="progress-bar">
        <Filler percentage={props.percentage} />
      </div>
    );
  };

  const Filler = (props) => {
    return (
      <div className="filler" style={{ width: `${props.percentage.value}%` }} />
    );
  };

  return (
    <div className="progress_bar_container">
      <Progress_Bar percentage={props} />
    </div>
  );
}

export default ProgressBar;
