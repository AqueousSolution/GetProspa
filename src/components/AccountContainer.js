import React from "react";

const AccountContainer = props => {
  return (
    <div className="accContainer">
      <div>
        <h1 className="header">{props.name}</h1>
        <h3>{props.number}</h3>
        <h2>{props.amount}</h2>
      </div>
      <div>
        <img className="bigIcon" src={props.avatar} alt="accountType" />
      </div>
    </div>
  );
};
export default AccountContainer;
