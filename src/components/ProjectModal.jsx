import React, { useEffect, useState } from "react";
import "./ProjectModal.css";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectModal({ project, onClose }) {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  const handleGithubClick = (e) => {
    if (isMobile) {
      e.preventDefault();
    }
  };

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="modal-split-layout">
          {/* Left Column: Text Content */}
          <div className="modal-left">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-description">
              {project.description || project.shortDescription}
            </p>

            <div className="modal-tech-stack">
              <h4>{t.modal.technologies}</h4>
              <div className="tech-tags">
                {project.technologies?.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="modal-right">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="modal-image-preview"
              />
            ) : (
              <div
                className="modal-image-placeholder"
                style={{ background: project.color || "#333" }}
              >
                <span>{t.modal.noPreview}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Action: Single large GitHub button */}
        <div className="modal-actions-footer">
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`modal-btn-github-large ${
                isMobile ? "modal-btn-warning" : ""
              }`}
              onClick={handleGithubClick}
            >
              {isMobile
                ? t.modal.desktopRequired
                : project.buttonText || t.modal.viewCode}
            </a>
          ) : project.buttonText ? (
            <button className="modal-btn-github-large disabled-btn" disabled>
              {project.buttonText}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
