import React from "react";

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
        {/*  <img className="welcomelogo" src="./prospa-logo.svg" /> */}
        <h1>Welcome</h1>
        <div className="maindiv">
          <p className="mainp">
            Thank you for your interest in Prospa. Please find below the
            documents required for sign up
          </p>
        </div>

        <div className="requirements">
          <div className="items ">
            <h2 className="one">Bvn</h2>
            <img className="illustration" src="./bvn.svg" alt="id" />
            <p>
              Your 10 digit BVN needed for verification purpose. It enables us
              to ensure you are the true owner of the account and also follow
              the Central Bank regulation
            </p>
          </div>
          <div className="items">
            <h2 className="two">Cac</h2>

            <img className="illustration" src="./CACill.svg" alt="id" />
            <p>
              Your CAC document which was issued to you when registering for
              your business enables ensure that you are the true owner of your
              business
            </p>
          </div>
          <div className="items ">
            <h2 className="three">Id Card</h2>
            <img className="illustration" src="./idcard.png" alt="id" />
            <p>
              A Valid ID Card like your international passport or National ID
              Card or Voters Card is needed for individual id and verification
              process
            </p>
          </div>
        </div>

        <button>Proceed</button>
      </div>
    </div>
  );
};
export default Welcome;
