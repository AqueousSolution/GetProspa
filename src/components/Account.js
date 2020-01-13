import React from "react";
import Navigation from "./Navigation";
import AccountContainer from "./AccountContainer";
import { NavLink } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <Navigation />
      <div className="MainContent">
        <h1> All Accounts</h1>
        <hr />
        <div className="flex">
          <AccountContainer
            name="Current Account"
            number="00-00-00 18361554"
            amount="N2,650,234.96"
            avatar="./bigWallet.png"
          />
          <AccountContainer
            name="Savings Account"
            number="00-00-00 18361554"
            amount="N1,050,234.33"
            avatar="./savings.png"
          />
        </div>
        <div className="flex">
          <AccountContainer
            name="Tax Account"
            number="00-00-00 18361554"
            amount="N589,879.00"
            avatar="./moneybag.png"
          />

          <div id="addNew">
            <button className="addButton">+</button>
            <p className="label">Add a New Account</p>
          </div>
        </div>
        <h1 className="marginU"> All Transactions</h1>
      </div>
    </div>
  );
};
export default Account;
