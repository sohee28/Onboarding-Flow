import React, { useState, useEffect } from "react";
import "react-day-picker/lib/style.css";
import UnAvailableZone from "./UnAvailableZone";
import AvailableZone from "./AvailableZone";

function AvailabilityZone() {
  const [Availability, setAvailability] = useState(true);

  const available = () => {
    setAvailability(true);
  };
  const unavailable = () => {
    setAvailability(false);
  };

  return (
    <div className="AvailabilityZone">
      <div className="AvailabilityZone_Title">
        <button onClick={available}>Availability</button>
        <button onClick={unavailable}>UnAvailability</button>
      </div>
      {Availability ? (
        <AvailableZone />
      ) : (
        <div className="AvailabilityZone_mainArea2">
          <p>Unavailable days</p>
          <UnAvailableZone />
        </div>
      )}
    </div>
  );
}
export default AvailabilityZone;
