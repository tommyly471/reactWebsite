import React from 'react';
import './Card.css';  // This imports the card-specific styles

const Card = () => {
  // Randomly determine if the card will be horizontal or vertical
  const isHorizontal = Math.random() > 0.5;

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Get a random color for the card background
  const randomColor = getRandomColor();

  return (
    <div
      className={`card ${isHorizontal ? 'horizontal' : 'vertical'}`}
      style={{ backgroundColor: randomColor }} // Apply the random color
    >
      Random Card
    </div>
  );
};

export default Card;
