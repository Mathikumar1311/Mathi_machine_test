import React, { useState } from "react";
import "./PhotoCarousel.css";

const PhotoCarousel = ({ images }) => {
  const [currentSet, setCurrentSet] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected card
  const imagesPerSet = 6;
  const totalSets = Math.ceil(images.length / imagesPerSet);

  const handleNext = () => {
    if (currentSet < totalSets - 1) {
      setCurrentSet(currentSet + 1);
    }
  };

  const handlePrev = () => {
    if (currentSet > 0) {
      setCurrentSet(currentSet - 1);
    }
  };

  const handleCardClick = (index) => {
    // Toggle the selected card
    setSelectedCard(selectedCard === index ? null : index);
  };

  const startIndex = currentSet * imagesPerSet;
  const currentImages = images.slice(startIndex, startIndex + imagesPerSet);

  return (
    <div className="photo-carousel">
      {/* Image Indicator at the Top Right Corner */}
      <div className="image-indicator">
        <div className="four-dots">
          {Array.from({ length: totalSets }).map((_, index) => (
            <span
              key={index}
              className={index === currentSet ? "active" : "inactive"}
            ></span>
          ))}
        </div>
      </div>

      {/* Image Container */}
      <div className="image-container">
        {currentImages.map((image, index) => (
          <div
            className={`card ${
              selectedCard === startIndex + index ? "selected" : ""
            }`}
            key={index}
            onClick={() => handleCardClick(startIndex + index)} // Handle click event
          >
            <img src={image} alt={`Pic ${startIndex + index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows at the Bottom Right Corner */}
      <div className="arrow-container">
        <div className="arrow left" onClick={handlePrev}>
          &lt;
        </div>
        <div className="arrow left">: :</div>
        <div className="arrow right" onClick={handleNext}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;
