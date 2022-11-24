import React from "react";
import "./Body.css";
import Picture from "../../Resources/image.png";
import Email from "../../Resources/Email fav.png";
import LinkedIn from "../../Resources/LinkedIn fav.png";

function Body() {
  return (
    <div className="body">
      <img src={Picture} alt="" className="image" />
      <h1>Joseph Odulesi</h1>
      <p>Frontend Developer & DevOps Engineer</p>
      <a href="https://jossyd.netlify.app/">My Website</a>
      <div className="button">
        <a href="">
          <button className="email">
            <img src={Email} className="fav" />
            <p>Email</p>
          </button>
        </a>

        <a href="https://www.linkedin.com/in/jossydee1/">
          <button className="linkedin">
            <img src={LinkedIn} className="fav" />
            <p>LinkedIn</p>
          </button>
        </a>
      </div>{" "}
      <dii className="about">
        <h1>About</h1>
        <p>
          fI am a Software Engineer who likes to develop digital products with
          great user experience. I desire to solve many life challenges with
          digital technology and make life experiences more interesting for
          humanity.
        </p>
      </dii>
      <div className="interest">
        <h1>Interest</h1>
        <p>Techology, Music, Football, Innovations</p>
      </div>
    </div>
  );
}

export default Body;
