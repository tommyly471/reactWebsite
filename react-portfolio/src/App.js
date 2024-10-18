import React, { useState } from "react";
import './App.css';
import Card from './components/Card';

const App = () => {
  const numberOfCards = 9;
  const [showCards, setShowCards] = useState(false);
  const [initialCardVisible, setInitialCardVisible] = useState(true);
  const [showShuffleButton, setShowShuffleButton] = useState(false);
  const [cards, setCards] = useState(Array.from({ length: numberOfCards - 1 }, (_, index) => index));

  const handleCardClick = () => {
    setShowCards(true);
    setInitialCardVisible(false);
    setShowShuffleButton(true); // Show shuffle button after initial card is clicked
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  return (
    <div className="app-container">
      {initialCardVisible && (
        <div onClick={handleCardClick} className="initial-card">
          <Card />
        </div>
      )}

      {showCards && (
        <div className="grid-container">
          {cards.map((cardIndex) => (
            <Card key={cardIndex} />
          ))}
        </div>
      )}

      {showShuffleButton && (
        <button onClick={shuffleCards} className="shuffle-button">
          Shuffle Cards
        </button>
      )}
    </div>
  );
};

export default App;
