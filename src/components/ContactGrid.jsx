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
      url: "",
      icon: "📧",
    },
    {
      name: "CV",
      value: t.contact.cv,
      url: "/Guillermo_Andujar_CV_EN.pdf",
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
