import React from "react";
import moment from "moment";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import { formatDate, parseDate } from "react-day-picker/moment";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.state = {
      from: undefined,
      to: undefined,
      array: [],
    };
  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), "months") < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }
  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  handleSave() {
    this.setState((prev) => ({
      array: [
        ...prev.array,
        { startdate: this.state.from, enddate: this.state.to },
      ],
    }));

    this.setState(this.getInitialState());
  }

  render() {
    console.log(this.state);
    const { from, to, array } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="unavilableZone">
        <div className="InputFromTo">
          <DayPickerInput
            value={from}
            placeholder="From"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { after: to },
              toMonth: to,
              modifiers,
              numberOfMonths: 2,
              onDayClick: () => this.to.getInput().focus(),
            }}
            onDayChange={this.handleFromChange}
          />
          <p> to </p>
          <span className="InputFromTo-to">
            <DayPickerInput
              ref={(el) => (this.to = el)}
              value={to}
              placeholder="To"
              format="LL"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { before: from },
                modifiers,
                month: from,
                fromMonth: from,
                numberOfMonths: 2,
              }}
              onDayChange={this.handleToChange}
            />
          </span>
        </div>
        <button
          type="button"
          className="unavailable_btn"
          onClick={this.handleSave}
        >
          save
        </button>

        <div className="unavailable_display">
          {array &&
            array.map((date) => (
              <div className="unavailable_display_result">
                {date.startdate.toLocaleDateString()} to{" "}
                {date.enddate.toLocaleDateString()}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
