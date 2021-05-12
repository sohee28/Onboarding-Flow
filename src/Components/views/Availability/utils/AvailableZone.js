import React, { useState } from "react";
import Switch from "react-switch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

//rc-timer-picker library
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";

const format = "h:mm a";

const now = moment().hour(0).minute(0);

function AvailableZone() {
  const [switching, setswitching] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });
  const [days, setDays] = useState([
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]);

  const handleSwitch = (day) => {
    setswitching({ ...switching, [day]: !switching[day] });
  };

  console.log(switching);
  return (
    <div className="AvailableZone">
      {days.map((day) => {
        if (switching[day] === true)
          return (
            <div className="available_sub">
              <div className="available_detail">
                <p>{day}</p>
                <Switch
                  onChange={() => {
                    handleSwitch(day);
                  }}
                  checked={switching[day] === true}
                  className="react-switch"
                />
              </div>

              <div className="available_time_selection">
                <TimePicker
                  showSecond={false}
                  defaultValue={now}
                  className="timepicker"
                  format={format}
                  use12Hours
                  inputReadOnly
                />
                <p>to</p>
                <TimePicker
                  showSecond={false}
                  defaultValue={now}
                  className="timepicker"
                  format={format}
                  use12Hours
                  inputReadOnly
                />
                <button>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
              <button className="addhourbtn">Add hours +</button>
            </div>
          );

        if (switching[day] === false)
          return (
            <div className="available_sub">
              <div className="available_detail">
                <p>{day}</p>
                <Switch
                  onChange={() => {
                    handleSwitch(day);
                  }}
                  checked={switching[day] === true}
                  className="react-switch"
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                />
              </div>
            </div>
          );
      })}
    </div>
  );
}
export default AvailableZone;
