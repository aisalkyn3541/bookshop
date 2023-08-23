import React from "react";
import "./Choice.scss";
import choice from "../../img/Product Image.png";

const Choice = () => {
  return (
    <div>
      <div id="choice">
        <div className="container">
          <div className="choices">
            <div className="choices--choice1">
              <img src={choice} alt="" />
            </div>
            <div className="choices--choice2">
              <h1>logo</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
