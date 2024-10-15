import React, { useState } from "react";
import './App.css';  // Assuming this is for global styles or layout styles
import Card from './components/Card';  // Importing the Card component from the components folder

// Main App component
const App = () => {
  const numberOfCards = 9; // Total number of cards
  const [showCards, setShowCards] = useState(false); // State to track if additional cards are visible
  const [initialCardVisible, setInitialCardVisible] = useState(true); // State for showing the initial card

  // Function to handle the click of the initial card
  const handleCardClick = () => {
    setShowCards(true);        // Reveal other cards
    setInitialCardVisible(false); // Hide the initial card
  };

  return (
    <div className={`app-container ${initialCardVisible ? 'center-card' : ''}`}>
      {/* Conditionally render the initial card */}
      {initialCardVisible && (
        <div onClick={handleCardClick} className="initial-card">
          <Card />
        </div>
      )}

      {/* Conditionally render the rest of the cards */}
      {showCards && (
        <div className="grid-container">
          {Array.from({ length: numberOfCards - 1 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
