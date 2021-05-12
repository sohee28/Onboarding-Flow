import React, { useContext } from "react";
import "../Description_Title.css";
import userContext from "../../../../index";

function Description_Title_Left() {
  const { user, setUser } = useContext(userContext);
  const userData = user.user;

  return (
    <div className="Description_Left_Container">
      <p className="Description_Title">Let's get stated with the basics...</p>
      <form className="Description_Form">
        <div className="Description_Name">
          <div className="Description_firstname">
            <label className="Description_Label">First Name</label>
            <input
              className="Description_Input_name"
              type="text"
              name="firstname"
              value={userData.fName}
              onChange={(e) => {
                setUser({
                  ...user,
                  user: { ...userData, fName: e.target.value },
                });
              }}
            />
          </div>
          <div className="Description_lastname">
            <label className="Description_Label">Last Name</label>
            <input
              className="Description_Input_name"
              type="text"
              name="lastname"
              value={userData.lName}
              onChange={(e) => {
                setUser({
                  ...user,
                  user: { ...userData, lName: e.target.value },
                });
              }}
            />
          </div>
        </div>
        <div className="Description_Jobtitle">
          <label className="Description_Label">Job Title</label>
          <input
            className="Description_Input"
            type="text"
            name="jobtitle"
            value={user.jobTitle}
            onChange={(e) => {
              setUser({
                ...user,
                user: { ...userData, jobTitle: e.target.value },
              });
            }}
          />
          <p className="Description_Hint">e.g. Cloud Security Architect</p>
        </div>
        <div className="Description_Industry">
          <label className="Description_Label">Industry</label>
          <select
            value={user.industry}
            onChange={(e) => {
              setUser({
                ...user,
                user: { ...userData, industry: e.target.value },
              });
            }}
          >
            <option value=""></option>
            <option value="Financial Services">Financial Services</option>
            <option value="Business Services">Business Services</option>
            <option value="Mailing Services">Mailing Services</option>
            <option value="Consulting Services">Consulting Services</option>
            <option value="Software Services">Software Services</option>
          </select>
        </div>
        <div className="Description_Companysize">
          <label className="Description_Label">Company Size</label>
          <select
            value={user.companySize}
            onChange={(e) => {
              setUser({
                ...user,
                user: { ...userData, companySize: e.target.value },
              });
            }}
          >
            <option value=""></option>
            <option value="1-49 Employees">1-49 Employees</option>
            <option value="50-100 Employees">50-100 Employees</option>
            <option value="101-500 Employees">101-500 Employees</option>
            <option value="500+ Employees">500+ Employees</option>
          </select>
        </div>
        <div className="Description_Location">
          <label className="Description_Label">Location</label>
          <select
            value={user.location}
            onChange={(e) => {
              setUser({
                ...user,
                user: { ...userData, location: e.target.value },
              });
            }}
          >
            <option value=""></option>
            <option value="San Francisco, CA">San Francisco, CA</option>
            <option value="Anchroage, AK">Anchorage, AK</option>
          </select>
          <p className="Description_Hint">e.g. San Francisco Bay Area</p>
        </div>
      </form>
    </div>
  );
}

export default Description_Title_Left;
