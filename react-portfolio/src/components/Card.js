import React from 'react';
import './Card.css'; // This imports the card-specific styles

const Card = ({ text }) => {
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
      style={{
        backgroundColor: randomColor, // Apply the random background color
        color: '#ffffff', // Ensure the text color is white for better contrast
        padding: '10px', // Add padding for better readability
        borderRadius: '8px', // Optional: add rounded corners for a nicer look
        textAlign: 'center', // Center the text
      }}
    >
      <p>{text}</p> {/* Display the text prop inside a paragraph tag */}
    </div>
  );
};

export default Card;
