import React from "react";
import "./ContactGrid.css";
import { useLanguage } from "../context/LanguageContext";

export default function ContactGrid() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "GitHub",
      value: "github.com/guillegas",
      url: "https://github.com/guillegas",
      icon: "💻",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/guillermo-andújar-martínez",
      url: "https://www.linkedin.com/in/guillermo-andújar-martínez",
      icon: "👔",
    },
    {
      name: "Email",
      value: "guilleandumarti@gmail.com",
      url: "mailto:guilleandumarti@gmail.com",
      icon: "📧",
    },
    {
      name: "CV",
      value: t.contact.cv,
      url: "https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/guillermo-and%C3%BAjar/876f489e-e37f-4ef1-a255-a6666c774990?view=html",
      icon: "📄",
    },
  ];

  return (
    <div className="contact-grid">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">{link.icon}</div>
          <div className="contact-info">
            <h4>{link.name}</h4>
            <span>{link.value}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
