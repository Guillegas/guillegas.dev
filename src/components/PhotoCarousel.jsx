import React, { useState } from "react";
import "./PhotoCarousel.css";

export default function PhotoCarousel({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) return null;

  return (
    <div className="photo-carousel-wrapper">
      <button className="carousel-arrow left" onClick={prevSlide}>
        &lt;
      </button>

      <div className="photo-carousel-container">
        <div
          className="photo-track"
          style={{
            transform: `translateX(calc(50% - ${activeIndex * 220 + 110}px))`,
          }} // 220px is card width + gap approx
        >
          {images.map((img, index) => {
            let offset = index - activeIndex;
            const isActive = index === activeIndex;
            const isNear = Math.abs(index - activeIndex) === 1;

            return (
              <div
                key={index}
                className={`photo-card ${isActive ? "active" : ""} ${
                  isNear ? "near" : "far"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={img} alt={`Memory ${index + 1}`} loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>

      <button className="carousel-arrow right" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
}
