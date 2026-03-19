import React from "react";

export const getProjects = (language = "en") => {
  const descriptions = {
    en: {
      taiko: {
        short: "AI-powered Inventory SaaS with RAG.",
        full: "A SaaS platform implementing AI for inventory management and small business databases. Features an advisory chatbot powered by LLMs and RAG (Retrieval-Augmented Generation) architecture, utilizing PostgreSQL and Vector Databases for customers to seamlessly query product availability and details.",
        button: "Work in Progress",
      },
      guillegas: {
        short: "My personal portfolio.",
        full: (
          <>
            The source code of this website.
            <br />
            <br />
            A showcase of my skills in frontend development, featuring WebGL
            animations, glassmorphism UI, and performance optimizations.
            <br />
            <br />
            It serves as my digital identity.
          </>
        ),
        button: "View Code on GitHub",
      },
    },
    es: {
      taiko: {
        short: "SaaS de inventario impulsado por IA y RAG.",
        full: "Una plataforma SaaS que implementa IA para la gestión de inventarios y bases de datos de pequeñas empresas. Cuenta con un chatbot asesor potenciado por LLMs y arquitectura RAG, utilizando PostgreSQL y Bases de Datos Vectoriales para que los clientes consulten la disponibilidad y detalles de los productos fluídamente.",
        button: "En Progreso",
      },
      guillegas: {
        short: "Mi portafolio personal.",
        full: (
          <>
            El código fuente de este sitio web.
            <br />
            <br />
            Una muestra de mis habilidades en desarrollo frontend, con
            animaciones WebGL, interfaz glassmorphism y optimizaciones de
            rendimiento.
            <br />
            <br />
            Sirve como mi identidad digital.
          </>
        ),
        button: "Ver código en GitHub",
      },
    },
    de: {
      taiko: {
        short: "KI-gestütztes Inventar-SaaS mit RAG.",
        full: "Eine SaaS-Plattform, die KI für das Inventarmanagement und Datenbanken kleiner Unternehmen implementiert. Verfügt über einen Beratungs-Chatbot, der von LLMs und der RAG-Architektur angetrieben wird und PostgreSQL sowie Vektordatenbanken nutzt, damit Kunden Produktverfügbarkeit und Details reibungslos abfragen können.",
        button: "In Arbeit",
      },
      guillegas: {
        short: "Mein persönliches Portfolio.",
        full: (
          <>
            Der Quellcode dieser Website.
            <br />
            <br />
            Ein Schaufenster meiner Fähigkeiten in der Frontend-Entwicklung, mit
            WebGL-Animationen, Glassmorphismus-UI und Leistungsoptimierungen.
            <br />
            <br />
            Es dient als meine digitale Identität.
          </>
        ),
        button: "Code auf GitHub ansehen",
      },
    },
  };

  const t = descriptions[language] || descriptions.en;

  return [
    {
      title: "TAIKO (TFG)",
      shortDescription: t.taiko.short,
      description: t.taiko.full,
      technologies: ["React", "FastAPI", "LLMs", "RAG", "Vector DB", "PostgreSQL"],
      image: "/projects/taiko_dashboard.png",
      githubLink: "",
      buttonText: t.taiko.button,
      color: "#8A2BE2",
    },
    {
      title: "guillegas.dev",
      shortDescription: t.guillegas.short,
      description: t.guillegas.full,
      technologies: ["React", "OGL", "Vite", "CSS Variables"],
      image: "/projects/guillegas_dev_preview.png",
      githubLink: "https://github.com/Guillegas/guillegas.dev.git",
      color: "#00ff41",
    },
  ];
};

export const myPhotos = [
  "/about_me/IMG_1470.jpg",
  "/about_me/IMG_1873.jpg",
  "/about_me/IMG_3513.jpg",
  "/about_me/IMG_5947.jpg",
  "/about_me/IMG_9193.jpg",
];
