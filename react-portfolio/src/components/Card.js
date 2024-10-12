import React from 'react';
import './Card.css';  // This imports the card-specific styles

const Card = () => {
  // Randomly determine if the card will be horizontal or vertical
  const isHorizontal = Math.random() > 0.5;

  return (
    <div className={`card ${isHorizontal ? 'horizontal' : 'vertical'}`}>
      Random Card
    </div>
  );
};

export default Card;
