import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
        <span className="orangeText">WeDAA</span>
          <span className="secondaryText">
          We streamlines your workflow <br />
freeing you to focus on what truly matters.
          </span>
          <img src="./3.png" alt="" width={120} />
        </div>

        <div className="flexColStart f-right">
          <span className="footerText">About</span>
          <div className="flexCenter f-menu">
            <span>Products</span>
            <span>Features</span>
            <span>News & Blogs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
