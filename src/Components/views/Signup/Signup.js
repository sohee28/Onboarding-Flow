import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="Signup_page">
      <div className="Signup_page_container">
        <p className="having_trouble">
          Having trouble? <span>Get help</span>
        </p>
        <div className="Signup_page_subcontainer">
          <div className="Signup_page_main">
            <div className="Signup_page_Mainarea">
              <div className="Signup_page_TitleArea">
                <p className="Signup_Title">Sign up</p>
                <p className="Signup_Subtitle">
                  Already have an account? <span>Sign in</span> and search for
                  experts
                </p>
              </div>
              <div className="Signup_page_socialmedia">
                <button className="linkedin_signup">
                  <img
                    src="/Images/icons8-linkedin.png"
                    alt="linkedin"
                    className="linkedin_btn"
                  />
                  <p>Sign up with Linkedin</p>
                </button>
                <button className="google_signup">
                  <img
                    src="/Images/icons8-google-48.png"
                    alt="google"
                    className="google_btn"
                  />
                  <p>Sign up with Google</p>
                </button>
              </div>
              <div className="or">
                <p className="or_w">or</p>
              </div>
              <div className="Signup_page_email">
                <input type="email" placeholder="Enter your email address..." />
                <Link to="/Description_Title">
                  <button className="email_signup">
                    <p>Continue with email</p>
                  </button>
                </Link>
              </div>
            </div>
            <p className="term_and_conditions">
              By clicking “Continue with LinkedIn/Google/Email” above, you
              acknowledge that you have read, understood, and agree to our{" "}
              <span>Terms & Conditions</span> and <span>Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
