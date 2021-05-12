import React, { useContext } from "react";
import "../TechBio.css";
import TechBio_Ex1 from "./TechBio_Ex1";
import TechBio_Ex2 from "./TechBio_Ex2";
import TechBio_Ex3 from "./TechBio_Ex3";

import userContext from "../../../../index";
import ReactSwipe from "react-swipe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function TechBio_Right() {
  const { user, setUser } = useContext(userContext);
  const userData = user.user;
  let reactSwipeEl;

  return (
    <div className="TechBio_Right_Container">
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <div>
          <TechBio_Ex1 />
        </div>
        <div>
          <TechBio_Ex2 />
        </div>
        <div>
          <TechBio_Ex3 />
        </div>
      </ReactSwipe>
      <div className="reactswipe_btn">
        <button onClick={() => reactSwipeEl.prev()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={() => reactSwipeEl.next()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default TechBio_Right;
