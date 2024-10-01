// card component

import React from "react";
import "./Card.css";

const Card = ({ imageSrc, title, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;