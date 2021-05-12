import React, { useState, useContext } from "react";
import "../TechBio.css";
import userContext from "../../../../index";

function TechBio_Left() {
  const { user, setUser } = useContext(userContext);
  const userData = user.user;
  const [count, setCount] = useState("");

  const handleTextArea = (e) => {
    setCount(250 - e.target.value.length);
    setUser({
      ...user,
      user: {
        ...userData,
        techBio: e.target.value,
      },
    });
  };
  return (
    <div className="TechBio_Left_Container">
      <div className="TechBio_Left_TitleArea">
        <p className="TechBio_Left_Title">Create your technology bio</p>
        <p className="TechBio_Left_SubTitle">
          Vendors are most interested in your current involvement in the
          evaluation and selection of new technology for your orginzation.
        </p>
      </div>
      <div className="TechBio_Left_MainArea">
        <textarea
          className="textarea_counter"
          type="text"
          rows={8}
          onChange={handleTextArea}
          value={userData.techBio}
        ></textarea>
        <p className="counter" style={{ fontSize: "12px" }}>
          {count}
        </p>
      </div>
    </div>
  );
}

export default TechBio_Left;
