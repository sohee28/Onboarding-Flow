import React, { useState } from "react";
import userContext from "../../../index";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: {
      fName: "",
      lName: "",
      jobTitle: "",
      industry: "",
      companySize: "",
      location: "",
      nicknamestatue: false,
      nickname: "",
      environment: "",
      techBio: "",
    },
    cloud: {
      aws: false,
      google: false,
      azure: false,
      value: { aws: "", google: "", azure: "" },
      cloudClicked: "",
      orchtools: [],
    },
    products: {
      addproduct: false,
      productLeft: [],
      productRight: [],
      searchList: [],
    },
    Evaluation: {
      evaluationList: [],
      newform: false,
    },
  });

  const uservalue = { user, setUser };

  return (
    <userContext.Provider value={uservalue}>{children}</userContext.Provider>
  );
};
export default UserContextProvider;
