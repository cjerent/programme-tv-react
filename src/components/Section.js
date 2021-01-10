import React from "react";

const Section = ({ time, title, type, image, duration, direct, isUnseen }) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="time">{time}</div>
        <div className="images">
          <img src={image} alt="tv-images" />
        </div>
        <div>
          <h2>{title}</h2>
          <div className="type">{type}</div>
          <span className="duration">{duration}</span>{" "}
          <span className="highlights">
            {direct ? <span>• Direct</span> : ""}{" "}
            {isUnseen ? <span>• Inédit</span> : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section;
