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
          title="Click to View Portfolio" 
          onClick={handleCardClick} 
          size={{ width: '400px', height: '300px' }}
        />
      ) : (
        <div className="portfolio-grid fade-in"> {/* Apply fade-in class to the container */}
          <Card imageSrc="portfolio-img1.jpg" title="Project 1" size={{ width: '350px', height: '450px' }} />
          <Card imageSrc="portfolio-img2.jpg" title="Project 2" size={{ width: '300px', height: '400px' }} />
          <Card imageSrc="portfolio-img3.jpg" title="Project 3" size={{ width: '400px', height: '500px' }} />
          <Card imageSrc="portfolio-img4.jpg" title="Project 4" size={{ width: '450px', height: '350px' }} />
          <Card imageSrc="portfolio-img5.jpg" title="Project 5" size={{ width: '500px', height: '400px' }} />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
