import React, { useContext, useState } from "react";
import "../Orchtools.css";
import userContext from "../../../../index";

function Orchtools_Left() {
  const { user, setUser } = useContext(userContext);
  const [styles, setStyles] = useState({
    AmazonEks: "1px solid rgba(220, 224, 224, 1)",
    RedHat: "1px solid rgba(220, 224, 224, 1)",
    Kubernetes: "1px solid rgba(220, 224, 224, 1)",
    DockerSwarm: "1px solid rgba(220, 224, 224, 1)",
    GKS: "1px solid rgba(220, 224, 224, 1)",
    AKS: "1px solid rgba(220, 224, 224, 1)",
  });
  const cloudData = user.cloud;
  const orchtools = cloudData.orchtools;

  console.log(styles);
  console.log(cloudData);
  const handleCheckbox = (e) => {
    const checked = cloudData.orchtools.includes(e.target.value);
    const name = e.target.id;
    console.log(name);
    if (checked === false) {
      setStyles({ ...styles, [name]: "2px solid rgba(0, 160, 255, 1)" });
      setUser({
        ...user,
        cloud: { ...cloudData, orchtools: [...orchtools, e.target.value] },
      });
    } else {
      if (checked === true) {
        setStyles({ ...styles, [name]: "1px solid black" });
        const index = cloudData.orchtools.indexOf(e.target.value);
        if (index > -1) {
          cloudData.orchtools.splice(index, 1);
        }
      }
    }
  };

  return (
    <div className="Orchtools_Left_Container">
      <p className="Orchtool_Left_Title">
        Is your environment runnning on any container or orchestration tools?{" "}
      </p>
      <form className="Orchtool_Left_Main">
        <label
          for="AmazonEks"
          className="Orchtool_Left_label"
          style={{ border: styles.AmazonEks }}
        >
          <img
            className="img_icon"
            src="/Images/amazon-eks-icon.png"
            alt="AmazonEks"
          />
          Amazon EKS
          <input
            id="AmazonEks"
            type="checkbox"
            value="Amazon EKS"
            onClick={handleCheckbox}
          />
        </label>
        <label
          for="RedHat"
          className="Orchtool_Left_label"
          style={{ border: styles.RedHat }}
        >
          <img
            className="img_icon"
            src="/Images/redhat-icon.png"
            alt="RedHat"
          />
          RedHat OpenShift
          <input
            id="RedHat"
            type="checkbox"
            value="RedHat OpenShift"
            onClick={handleCheckbox}
          />
        </label>
        <label
          for="Kubernetes"
          className="Orchtool_Left_label"
          style={{ border: styles.Kubernetes }}
        >
          <img
            className="img_icon"
            src="/Images/kubernetes-icon.png"
            alt="Kubernetes"
          />
          Kubernetes
          <input
            id="Kubernetes"
            type="checkbox"
            value="Kubernetes"
            onClick={handleCheckbox}
          />
        </label>
        <label
          for="DockerSwarm"
          className="Orchtool_Left_label"
          style={{ border: styles.DockerSwarm }}
        >
          <img
            className="img_icon"
            src="/Images/dockerswarm-icon.png"
            alt="DockerSwarm"
          />
          DockerSwarm
          <input
            id="DockerSwarm"
            type="checkbox"
            value="DockerSwarm"
            onClick={handleCheckbox}
          />
        </label>
        <label
          for="GKS"
          className="Orchtool_Left_label"
          style={{ border: styles.GKS }}
        >
          <img className="img_icon" src="/Images/gke-icon.png" alt="GKS" />
          Google GKS
          <input
            id="GKS"
            type="checkbox"
            value="Google GKS"
            onClick={handleCheckbox}
          />
        </label>
        <label
          for="AKS"
          className="Orchtool_Left_label"
          style={{ border: styles.AKS }}
        >
          <img className="img_icon" src="/Images/aks-icon.jpg" alt="AKS" />
          Azure AKS
          <input
            id="AKS"
            type="checkbox"
            value="Azure AKS"
            onClick={handleCheckbox}
          />
        </label>
      </form>
    </div>
  );
}

export default Orchtools_Left;
