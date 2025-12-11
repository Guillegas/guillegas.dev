import React, { useState } from "react";
import "./InteractiveProfile.css";

export default function InteractiveProfile() {
  const [step, setStep] = useState(0);

  const handleClick = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const getImage = () => {
    switch (step) {
      case 0:
        return "/profile/step0.png";
      case 1:
        return "/profile/step1.png";
      case 2:
        return "/profile/step2.jpg";
      default:
        return "/profile/step2.jpg";
    }
  };

  return (
    <div className="interactive-profile-container" onClick={handleClick}>
      <img
        key={step}
        src={getImage()}
        alt="Profile"
        className={`interactive-profile-img step-${step} profile-anim-fade`}
      />

      {/* Initial Arrow Indicator */}
      {step === 0 && (
        <div className="profile-arrow-indicator">
          <svg
            className="arrow-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      )}

      {/* Final Smiley Indicator */}
      {step === 2 && <div className="profile-smiley-indicator">:)</div>}

      {step < 2 && (
        <div className="profile-overlay-tooltip">
          <span>{step === 0 ? "Click to discover" : "Click again"}</span>
        </div>
      )}
    </div>
  );
}
