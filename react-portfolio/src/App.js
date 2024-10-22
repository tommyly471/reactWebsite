import React, { useState } from "react";
import './App.css';
import Card from './components/Card';

const App = () => {
  const numberOfCards = 9;
  const [showCards, setShowCards] = useState(false);
  const [initialCardVisible, setInitialCardVisible] = useState(true);
  const [showShuffleButton, setShowShuffleButton] = useState(false);
  
  // Initialize an array of card objects with unique IDs
  const [cards, setCards] = useState(
    [
      { id: 0, text: "The only limit to our realization of tomorrow is our doubts of today." },
      { id: 1, text: "Life is 10% what happens to us and 90% how we react to it." },
      { id: 2, text: "The best way to predict the future is to invent it." },
      { id: 3, text: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
      { id: 4, text: "Don't watch the clock; do what it does. Keep going." },
      { id: 5, text: "You miss 100% of the shots you don't take." },
      { id: 6, text: "It always seems impossible until it’s done." },
      { id: 7, text: "The only way to do great work is to love what you do." },
      { id: 8, text: "Dream big and dare to fail." }
    ]
  );

  const handleCardClick = () => {
    setShowCards(true);
    setInitialCardVisible(false);
    setShowShuffleButton(true); // Show shuffle button after the initial card is clicked
  };

  const shuffleCards = () => {
    // Shuffle the cards using a random sort order
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  return (
    <div className="app-container">
      {initialCardVisible && (
        <div onClick={handleCardClick} className="initial-card">
          <Card text="Click to reveal cards" />
        </div>
      )}

      {showCards && (
        <div className="grid-container">
          {cards.map((card) => (
            <Card key={card.id} text={card.text} /> // Pass the text prop to each Card
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
