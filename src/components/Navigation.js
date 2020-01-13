import React from "react";
import TopBar from "./TopBar";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <TopBar />
      <nav>
        <img className="toplogo" src="./prospa-logo.svg" />
        <ul>
          <li className="flexed">
            <NavLink
              to="/Account"
              activeClassName="active"
              activeStyle={{ width: "100px" }}
              style={{
                width: "100px",
                textDecoration: "none",
                display: "flex",
                color: "white"
              }}
            >
              <img className="icon" src="./wallet.png" />
              Accounts
            </NavLink>
          </li>
          <li className="flexed">
            <NavLink
              to="/Invoicing"
              style={{
                width: "100px",
                textDecoration: "none",
                display: "flex",
                color: "white"
              }}
              activeClassName="active"
              activeStyle={{ width: "100px" }}
            >
              <img className="icon" src="./invoicing.png" />
              Invoicing
            </NavLink>
          </li>
          <li className="flexed">
            <NavLink
              to="/AccMgt"
              style={{
                width: "100px",
                textDecoration: "none",
                display: "flex",
                color: "white"
              }}
              activeClassName="active"
              activeStyle={{ width: "100px" }}
            >
              <img className="icon" src="./gear.png" />
              Management
            </NavLink>
          </li>
          <li className="flexed">
            <NavLink
              to="/profile"
              style={{
                width: "100px",
                textDecoration: "none",
                display: "flex",
                color: "white"
              }}
              activeClassName="active"
              activeStyle={{ width: "100px" }}
            >
              <img className="icon" src="./profile.png" />
              MyProfile
            </NavLink>
          </li>
          <li className="flexed">
            <NavLink
              to="/security"
              style={{
                width: "100px",
                textDecoration: "none",
                display: "flex",
                color: "white"
              }}
              activeClassName="active"
              activeStyle={{ width: "100px" }}
            >
              <img className="icon" src="./security1.png" />
              Security
            </NavLink>
          </li>
          <li className="flexed">
            <NavLink
              to="/support"
              style={{
                width: "100px",
                textDecoration: "none",
                display: "flex",
                color: "white"
              }}
              activeClassName="active"
              activeStyle={{ width: "100px" }}
            >
              <img className="icon" src="./support.png" />
              Support
            </NavLink>
          </li>
        </ul>
        <img className="hidden" src="./Hamburger.png" alt="Menu" />
        <img className="navDesign" src="./navdesign.png" alt="design" />
      </nav>
    </div>
  );
};
export default Navigation;
