import React, { useState } from "react";
import "../Availability.css";
import TimezoneSelect from "react-timezone-select";
import AvailabilityZone from "../utils/AvailabilityZone";

function Availability_Left() {
  const [selectedTimezone, setSelectedTimezone] = useState("");

  return (
    <div className="Availability_Left_Container">
      <div className="Availability_Left_TitleArea">
        <p className="Availability_Left_Title">Set your availability</p>
        <p className="Availability_Left_SubTitle">
          We only allow bookings within your availability that you set below and
          we give you time to accept new requests.
        </p>
      </div>
      <div className="Availability_Timezone">
        <TimezoneSelect
          className="timezoneselect"
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
      </div>
      <div className="Availability_mainarea">
        <AvailabilityZone />
      </div>
    </div>
  );
}

export default Availability_Left;
