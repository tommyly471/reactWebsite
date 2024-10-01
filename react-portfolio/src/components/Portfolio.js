// Portfolio.js
import React, { useState } from "react";
import Card from "./Card";
import "./Portfolio.css";

const Portfolio = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(true);
  };

  return (
    <div className="portfolio-container">
      {!expanded ? (
        <Card 
          imageSrc="your-image-url.jpg" 
          title="Click to View Portfolio" 
          onClick={handleCardClick} 
        />
      ) : (
        <div className="portfolio-grid">
          <Card imageSrc="portfolio-img1.jpg" title="Project 1" />
          <Card imageSrc="portfolio-img2.jpg" title="Project 2" />
          <Card imageSrc="portfolio-img3.jpg" title="Project 3" />
          <Card imageSrc="portfolio-img4.jpg" title="Project 4" />
          <Card imageSrc="portfolio-img5.jpg" title="Project 5" />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
