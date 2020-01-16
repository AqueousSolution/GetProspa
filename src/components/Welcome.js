import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcomepage">
      {/* <header>
        <img className="welcomelogo" src="./prospa-logo-purple.svg" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </header> */}
      <div className="gradientBG">
        <img className="welcomelogo" src="./prospa-logo.svg" />
        <h1>Welcome</h1>
        <p>
          Thank you for your interest in prospa.
          <br /> Please find below the documents required for sign up
        </p>
        <div className="requirements">
          <div className="items c">
            <h2>Bvn</h2>
            <img className="illustration" src="./bvn.svg" alt="id" />
            <p>
              Your 10 digit BVN needed for verification purpose. It enables us
              to ensure you are the true owner of the account and also follow
              the Central Bank regulation and directive
            </p>
          </div>
          <div className="items">
            <h2>Cac</h2>

            <img className="illustration" src="./CACill.svg" alt="id" />
            <p>
              Your CAC document which was issued to you when registering for
              your business enables ensure that you are the true owner of your
              business and as such makes the verification easy
            </p>
          </div>
          <div className="items ">
            <h2>Id Card</h2>
            <img className="illustration" src="./idcard.svg" alt="id" />
            <p>
              A Valid ID Card such as your international passport or National ID
              Card or Voters Card is needed for individual identification and
              verification process
            </p>
          </div>
        </div>

        <button>Proceed</button>
      </div>
    </div>
  );
};
export default Welcome;
