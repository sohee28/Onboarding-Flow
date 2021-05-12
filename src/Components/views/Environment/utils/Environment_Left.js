import React, { useContext } from "react";
import "../Environment.css";
import userContext from "../../../../index";

function Environment_Left() {
  const { user, setUser } = useContext(userContext);
  const userData = user.user;

  return (
    <div className="Environment_Left_Container">
      <p className="Environment_Left_Title">
        What type of environment do you work in?
      </p>
      <div
        className="Environment_Left_Radioselection"
        onChange={(e) => {
          setUser({
            ...user,
            user: { ...userData, environment: e.target.value },
          });
        }}
      >
        <label>
          <input type="radio" value="100% On-prem" name="env" />
          100% On-prem
        </label>
        <label>
          <input type="radio" value="Mostly On-prem" name="env" />
          Mostly On-prem
        </label>
        <label>
          <input type="radio" value="Hybrid Cloud" name="env" />
          Hybrid Cloud
        </label>
        <label>
          <input type="radio" value="Mostly Cloud" name="env" />
          Mostly Cloud
        </label>
        <label>
          <input type="radio" value="Cloud Native" name="env" />
          Cloud Native
        </label>
      </div>
    </div>
  );
}

export default Environment_Left;
