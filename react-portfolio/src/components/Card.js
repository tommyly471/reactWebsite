// card component

import React from "react";
import "./Card.css";

const Card = ({ imageSrc, title, onClick, size }) => {
  const cardStyle = {
    width: size?.width || '300px', // Default width if size is not provided
    height: size?.height || '400px', // Default height if size is not provided
  };

  return (
    <div className="card" onClick={onClick} style={cardStyle}>
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
