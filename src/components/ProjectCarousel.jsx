import React, { useState, useEffect } from "react";
import "./ProjectCarousel.css";

export default function ProjectCarousel({ projects = [], onSelectProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (!projects.length) return null;

  // Ajustar el ancho de la tarjeta y el gap según el dispositivo
  const cardWidth = isMobile ? 160 : 280;
  const gap = isMobile ? 12 : 20;
  const step = cardWidth + gap;

  return (
    <div className="project-carousel-wrapper">
      <button className="carousel-arrow left" onClick={prevSlide}>
        &lt;
      </button>

      <div className="project-carousel-container">
        <div
          className="project-track"
          style={{
            transform: `translateX(calc(50% - ${
              activeIndex * step + cardWidth / 2
            }px))`,
          }}
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const isNear = Math.abs(index - activeIndex) === 1;

            return (
              <div
                key={index}
                className={`project-card-item ${isActive ? "active" : ""} ${
                  isNear ? "near" : "far"
                }`}
                onClick={() =>
                  isActive ? onSelectProject(project) : setActiveIndex(index)
                }
                role="button"
                tabIndex={0}
              >
                <div className="project-card-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div
                      className="placeholder-image"
                      style={{ background: project.color || "#333" }}
                    />
                  )}
                </div>
                <div className="project-card-info">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  {isActive && (
                    <span className="click-hint">Click for details</span>
                  )}
                </div>
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
