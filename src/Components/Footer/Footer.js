import React from "react";
import "./Footer.css";
import Twitter from "../../Resources/Twitter fav.png";
import Facebook from "../../Resources/Facebook fav.png";
import Instagram from "../../Resources/Instagram fav.png";
import Github from "../../Resources/Github fav.png";
function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/jossydee1">
        <img src={Twitter} alt="" />
      </a>
      <a href="https://github.com/jossydee1">
        <img src={Facebook} alt="" />
      </a>
      <a href="https://github.com/jossydee1">
        <img src={Instagram} alt="" />
      </a>
      <a href="https://github.com/jossydee1">
        <img src={Github} alt="" />
      </a>
    </div>
  );
}

export default Footer;
