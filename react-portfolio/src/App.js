import React from "react";
import './App.css';

// Card component
const Card = () => {
  // Generate random heights within a range
  const randomHeight = Math.floor(Math.random() * (300 - 150 + 1)) + 150;  // between 150px to 300px

  const cardStyle = {
    height: `${randomHeight}px`,
    backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,  // random background color
    borderRadius: "8px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px"
  };

  return <div style={cardStyle}>Random Card</div>;
};

// Main App component
const App = () => {
  const numberOfCards = 15;  // Number of cards you want to display
  
  return (
    <div className="grid-container">
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default App;
