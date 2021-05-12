import React, { useState, useContext, useEffect } from "react";
import userContext from "../../../../index";
import "../utils/ProfileNavbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

function ProfileRight() {
  const { user, setUser } = useContext(userContext);
  const cloudData = user.cloud;

  console.log(cloudData.value.google);
  return (
    <div className="ProfileRight">
      <div className="ProfileRight_section1">
        <div className="ProfileRight_cloud">
          <p className="ProfileRight_cloud_title">Environment</p>
          <div>
            {cloudData.aws === true && (
              <div className="cloud_item">
                <img src="/Images/icons-aws.png" alt="aws" />
                <div className="cloud-item-detail">
                  <p>AWS</p>
                  <div
                    className="filler_aws"
                    style={{ width: `${cloudData.value.aws}%` }}
                  />
                </div>
              </div>
            )}
            {cloudData.google === true && (
              <div className="cloud_item">
                <img src="/Images/icons8-google-cloud.png" alt="googlecloud" />{" "}
                <div className="cloud-item-detail">
                  <p>GOOGLE CLOUD</p>
                  <div
                    className="filler_google"
                    style={{ width: `${cloudData.value.google}%` }}
                  />
                </div>
              </div>
            )}
            {cloudData.azure === true && (
              <div className="cloud_item">
                <img src="/Images/icons8-azure.png" alt="azure" />
                <div className="cloud-item-detail">
                  <p>AZURE</p>
                  <div
                    className="filler_azure"
                    style={{ width: `${cloudData.value.azure}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="ProfileRight_tools"></div>
      </div>
      <div className="ProfileRight_product"></div>
    </div>
  );
}

export default ProfileRight;
