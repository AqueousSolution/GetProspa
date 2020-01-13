import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcomepage">
      <header>
        <img className="welcomelogo" src="./prospa-logo-purple.svg" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </header>

      <div className="welcome">
        <div>
          <h1>Welcome</h1>
          <p>Thank you for your interest in Prospa.</p>
          <p> My name is Amaka and I will be assisting</p>
          <p> you with your sign up. Kindly find the </p>
          <p> requirements needed below</p>
        </div>
        <img className="amaka" src="./undraw.png" alt="Amaka" />
      </div>
      <div className="requirements">
        <div className="items colored">
          <h2>BVN</h2>
          <hr />
          <p>Your 10 digit BVN needed for verification purpose</p>
        </div>
        <div className="items">
          <h2>CAC</h2>
          <hr />
          <p>Your 10 digit BVN needed for verification purpose</p>
        </div>
        <div className="items colored">
          <h2>ID Card</h2>
          <hr />
          <p>Your 10 digit BVN needed for verification purpose</p>
        </div>
        <div className="items">
          <h2>CSS</h2>
          <hr />
          <p>Your 10 digit BVN needed for verification purpose</p>
        </div>
      </div>
      <div className="bottomdiv">
        <p>Got All these items?</p>
        <button>
          <Link
            to="/account"
            style={{ color: "white", textDecoration: "none" }}
          >
            Proceed
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Welcome;
