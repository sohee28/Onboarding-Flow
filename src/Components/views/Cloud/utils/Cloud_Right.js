import React, { useContext } from "react";
import "../Cloud.css";
import userContext from "../../../../index";

function Cloud_Right() {
  const { user, setUser } = useContext(userContext);
  const cloudData = user.cloud;
  console.log(cloudData);
  return (
    <div className="Cloud_Right_Container">
      <img src="/Images/icons8-light.gif" alt="" />
      {cloudData.cloudClicked === "" ? (
        <>
          <p className="Cloud_Right_parafirst">Insights</p>
          <p className=" Cloud_Right_parasecond">
            There are <span>304</span> experts also working in a Hybrid Cloud
            environment.{" "}
          </p>
        </>
      ) : (
        <>
          <p className="Cloud_Right_parafirst">
            ADD {cloudData.cloudClicked.toUpperCase()}
          </p>
          <p className=" Cloud_Right_parasecond">
            {cloudData.cloudClicked === "aws" && <span> 72% </span>}
            {cloudData.cloudClicked === "google cloud" && <span> 80% </span>}
            {cloudData.cloudClicked === "microsoft azure" && <span> 68% </span>}
            more vendors are interested in{" "}
            {cloudData.cloudClicked.toUpperCase()} experience versus other cloud
            providers.
          </p>
        </>
      )}
    </div>
  );
}

export default Cloud_Right;
