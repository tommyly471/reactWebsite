import React from "react";
import './App.css';

// Card component
const Card = () => {
  // Randomly determine if the card will be horizontal or vertical
  const isHorizontal = Math.random() > 0.5; // 50% chance for horizontal

  // Randomize width and height based on orientation
  const randomWidth = isHorizontal
    ? Math.floor(Math.random() * (350 - 250 + 1)) + 250
    : Math.floor(Math.random() * (200 - 150 + 1)) + 150;
  const randomHeight = isHorizontal
    ? Math.floor(Math.random() * (200 - 150 + 1)) + 150
    : Math.floor(Math.random() * (300 - 200 + 1)) + 200;

  const cardStyle = {
    width: `${randomWidth}px`,
    height: `${randomHeight}px`,
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random background color
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    boxSizing: "border-box"
  };

  return <div style={cardStyle}>Random Card</div>;
};

// Main App component
const App = () => {
  const numberOfCards = 5; // Number of cards to display

  return (
    <div className="grid-container">
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default App;
