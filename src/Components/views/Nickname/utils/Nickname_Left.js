import React, { useState, useContext } from "react";
import "../Nickname.css";
import userContext from "../../../../index";

function Nickname_Left() {
  const { user, setUser } = useContext(userContext);
  const userData = user.user;

  return (
    <div className="Nickname_Left_Container">
      <div className="Nickname_Left_TitleArea">
        <p className="Nickname_Left_Title">
          Would you like to go by a nickname?
        </p>
        <p className="Nickname_Left_SubTitle">
          Vendors are interested in your opinions, not your employers! That's
          why everyone on sagetap is anonymous by default. If you think your
          first name is too identifiable, create a nickname vendors can use when
          they speak with you.
          <span>Read more about anonymity</span>
        </p>
      </div>
      <div className="Nickname_Left_MainArea">
        <label>
          <input
            type="radio"
            value="name"
            name="Nickname"
            checked={userData.nicknamestatue === false}
            onClick={(e) => {
              setUser({
                ...user,
                user: { ...userData, nicknamestatue: false },
              });
            }}
          />{" "}
          Go by {userData.fName}
        </label>
        <div className="Nickname_Left_nickname">
          <label>
            <input
              type="radio"
              value="nickname"
              name="Nickname"
              onClick={(e) => {
                setUser({
                  ...user,
                  user: { ...userData, nicknamestatue: true },
                });
              }}
            />{" "}
            Create a nickname
          </label>
          {userData.nicknamestatue === true && (
            <div className="Nickname_Left_chooseNick">
              <input
                className="Nickname_Left_Input"
                type="text"
                value={userData.nickname}
                name="nicknameselected"
                placeholder="Add your nickname"
                onChange={(e) => {
                  setUser({
                    ...user,
                    user: { ...userData, nickname: e.target.value },
                  });
                }}
              />
              <p className="Nickname_Left_Hint">
                Don’t worry, you can change this later in settings
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nickname_Left;
