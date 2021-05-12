import React, { useContext, useState, useEffect } from "react";
import "../Cloud.css";
import userContext from "../../../../index";
import RangeSlider from "./RangeSlider";

function Cloud_Left() {
  const { user, setUser } = useContext(userContext);
  const cloudData = user.cloud;
  const valuedata = cloudData.value;
  const [data, setData] = useState([]);

  const [range, setRange] = useState({
    aws: 0,
    googlecloud: 0,
    microsoftazure: 0,
  });
  console.log(cloudData);

  const handleAws = () => {
    if (cloudData.aws === true) {
      setData([
        ...data,
        {
          id: "aws",
          label: "aws",
          value: range.aws,
          color: "hsl(55, 70%, 50%)",
        },
      ]);

      setUser({
        ...user,
        cloud: {
          ...cloudData,
          value: { ...valuedata, aws: range.aws },
        },
      });
    }
  };
  const handleazure = () => {
    if (cloudData.azure === true) {
      setData([
        ...data,
        {
          id: "microsoftazure",
          label: "microsoftazure",
          value: range.microsoftazure,
          color: "hsl(360, 70%, 50%)",
        },
      ]);
      setUser({
        ...user,
        cloud: {
          ...cloudData,
          value: { ...valuedata, azure: range.microsoftazure },
        },
      });
    }
  };
  const handlegoogle = () => {
    if (cloudData.google === true) {
      setData([
        ...data,
        {
          id: "googlecloud",
          label: "googlecloud",
          value: range.googlecloud,
          color: "hsl(239, 70%, 50%)",
        },
      ]);
      setUser({
        ...user,
        cloud: {
          ...cloudData,
          value: { ...valuedata, google: range.googlecloud },
        },
      });
    }
  };

  return (
    <div className="Cloud_Left_Container">
      <p className="Cloud_Left_Title">
        Which cloud provider(s) do you currently use?
      </p>
      <div className="Cloud_Left_Main">
        <div className="awsarea">
          <label>
            <input
              type="radio"
              value="aws"
              checked={cloudData.aws === true}
              onClick={(e) => {
                setUser({
                  ...user,
                  cloud: {
                    ...cloudData,
                    aws: !cloudData.aws,
                    cloudClicked: e.target.value,
                  },
                });
              }}
            />
            <img src="/Images/icons-aws.png" alt="aws" />
          </label>
          {cloudData.aws === true && (
            <div className="extra">
              <input
                type="number"
                onChange={(e) => {
                  setRange({ ...range, aws: e.target.value });
                }}
              />
              <button onClick={handleAws}>save</button>
            </div>
          )}
        </div>
        <div className="googleCloudArea">
          <label>
            <input
              type="radio"
              value="google cloud"
              checked={cloudData.google === true}
              onClick={(e) => {
                setUser({
                  ...user,
                  cloud: {
                    ...cloudData,
                    google: !cloudData.google,
                    cloudClicked: e.target.value,
                  },
                });
              }}
            />
            <img src="/Images/icons8-google-cloud.png" alt="google" />
          </label>
          {cloudData.google === true && (
            <div className="extra">
              <input
                type="number"
                onChange={(e) => {
                  setRange({ ...range, googlecloud: e.target.value });
                }}
              />
              <button onClick={handlegoogle}>save</button>
            </div>
          )}
        </div>
        <div className="azureArea">
          <label>
            <input
              type="radio"
              value="microsoft azure"
              checked={cloudData.azure === true}
              onClick={(e) => {
                setUser({
                  ...user,
                  cloud: {
                    ...cloudData,
                    azure: !cloudData.azure,
                    cloudClicked: e.target.value,
                  },
                });
              }}
            />
            <img src="/Images/icons8-azure.png" alt="azure" />
          </label>
          {cloudData.azure === true && (
            <div className="extra">
              <input
                type="number"
                onChange={(e) => {
                  setRange({ ...range, microsoftazure: e.target.value });
                }}
              />
              <button onClick={handleazure}>save</button>
            </div>
          )}
        </div>
      </div>
      <RangeSlider data={data} />
    </div>
  );
}

export default Cloud_Left;
