import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserContextProvider from "./Components/utils/ContextProvider/userContextProvider";

const userContext = React.createContext({
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
    cloudClicked: "",
    value: { aws: "", google: "", azure: "" },
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
  setUser: () => {},
});

export default userContext;

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
