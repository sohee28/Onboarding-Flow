import React from "react";
import "../Payments.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

function Payments_Left() {
  return (
    <div className="Payments_Left_Container">
      <p className="Payments_Left_Title">
        How much would you like to charge vendors?
      </p>
      <p className="Payments_Left_SubTitle">
        Experts charge as little as $1.00 and as high as $2000. Find a price
        point that makes this meaningful and fun for you to participate. You can
        always change your fee and how you’re paid later in your settings.
      </p>
      <div className="Payments_Left_Mainarea">
        <input type="number" placeholder="$00.00" />
        <div className="Payments_socialmedia">
          <button className="payout_paypal">
            <FontAwesomeIcon
              className="Payments_socialmediaicon"
              icon={faPaypal}
            />
            Payout via PayPal
          </button>
          <button className="amazon_giftcard">
            <FontAwesomeIcon
              className="Payments_socialmediaicon"
              icon={faAmazon}
            />
            Amazon Gift Card
          </button>
        </div>
        <button className="donate_charity">
          Donate all proceeds to charity
        </button>
      </div>
      <div className="Payments_Left_infoarea">
        <p className="Payments_para">
          How much money can I expect to make?
          <FontAwesomeIcon className="Payments_Icon" icon={faChevronDown} />
        </p>
        <p className="Payments_para">
          Can I choose which charity to donate to?
          <FontAwesomeIcon className="Payments_Icon" icon={faChevronDown} />
        </p>
        <p className="Payments_para">
          What if my employer prohibits taking payment?
          <FontAwesomeIcon className="Payments_Icon" icon={faChevronDown} />
        </p>
        <p className="Payments_para">
          Does Sagetap issue 1099s?
          <FontAwesomeIcon className="Payments_Icon" icon={faChevronDown} />
        </p>
      </div>
    </div>
  );
}

export default Payments_Left;
