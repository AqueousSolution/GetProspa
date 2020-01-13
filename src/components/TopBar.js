import React from "react";

const TopBar = () => {
  return (
    <div>
      <div className="topbar">
        <img className="icon" src="./message.png" alt="messages" />

        <img className="profilepic" src="./pic.jpeg" alt="profilepic" />
        <h4>Victor Shiwani</h4>
        <img className="icon right" src="./DownArrow.svg" alt="dropdown" />
      </div>
    </div>
  );
};
export default TopBar;
