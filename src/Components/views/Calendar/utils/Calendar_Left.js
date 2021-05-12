import React from "react";
import "../Calendar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Calendar_Left() {
  return (
    <div className="Calendar_Left_Container">
      <p className="Calendar_Left_Title">
        Successful consultations start with an accurate calendar
      </p>
      <p className="Calendar_Left_SubTitle">
        Vendors will book available time instantly. Only get booked when you’re
        available by keeping your calendar and avaiobility settings up-to-date.
      </p>
      <p className="Calendar_para">
        How can I cross-reference my work calendar?
        <FontAwesomeIcon className="Calendar_Icon" icon={faChevronDown} />
      </p>
      <label for="calendar" className="Calendar_Left_label">
        <input id="calendar" type="checkbox" />
        Got it! I’ll keep my calendar up to date.
      </label>
    </div>
  );
}

export default Calendar_Left;
