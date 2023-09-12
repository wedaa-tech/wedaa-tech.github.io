import React from "react";
import "./get-started.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Your Voice Matters!</span>
          <span className="secondaryText">
          Share your insights & Join us in shaping the future of
            <br />
            WeDAA.
          </span>
          <div className="flexCenter search-bar">
            <input type="text" />
            <button className="button">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
