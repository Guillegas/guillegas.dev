import React from "react";

export const getProjects = (language = "en") => {
  const descriptions = {
    en: {
      inkprep: {
        short: "Mobile app for tattoo artists, live on the App Store.",
        full: "Mobile app for color tattoo artists, published and live on the App Store. I lead the project in every area: product, design, development, marketing, App Store presence and user growth.",
        button: "View on the App Store",
      },
      videoOps: {
        short: "AI video intelligence SaaS for ecommerce brands.",
        full: (
          <>
            A SaaS platform that turns the raw video libraries of ecommerce
            companies into an organized, searchable content database. AI
            analyzes every video to tag, categorize, curate and edit it
            automatically, so marketing teams stop digging through folders and
            ship content far faster.
            <br />
            <br />
            Built in-house at BAKANO: the product is company-owned, so there is
            no public demo or repository available.
          </>
        ),
        button: "Private · Company Project",
      },
      wialth: {
        short: "iOS fintech app to learn money management from zero.",
        full: (
          <>
            Wialth is an iOS app that helps anyone take control of their
            personal finances from scratch, with no previous financial
            knowledge required.
            <br />
            <br />
            Currently in development and going through a full redesign and a
            pivot from the original idea.
          </>
        ),
        button: "Work in Progress",
      },
      taiko: {
        short: "AI-powered Inventory SaaS with RAG.",
        full: "A SaaS platform implementing AI for inventory management and small business databases. Features an advisory chatbot powered by LLMs and RAG (Retrieval-Augmented Generation) architecture, utilizing PostgreSQL and Vector Databases for customers to seamlessly query product availability and details.",
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
      inkprep: {
        short: "App móvil para tatuadores, disponible en la App Store.",
        full: "App móvil para tatuadores de color, publicada y disponible en la App Store. Lidero el proyecto en todas sus áreas: producto, diseño, desarrollo, marketing, presencia en la App Store y crecimiento de usuarios.",
        button: "Ver en la App Store",
      },
      videoOps: {
        short: "SaaS de análisis de vídeo con IA para ecommerce.",
        full: (
          <>
            Una plataforma SaaS que convierte las videotecas de las empresas de
            ecommerce en una base de datos de contenido organizada y
            consultable. La IA analiza cada vídeo para etiquetarlo,
            categorizarlo, curarlo y editarlo automáticamente, de forma que los
            equipos de marketing dejen de bucear entre carpetas y publiquen
            mucho más rápido.
            <br />
            <br />
            Desarrollado internamente en BAKANO: el producto es propiedad de la
            empresa, por lo que no hay demo ni repositorio públicos.
          </>
        ),
        button: "Privado · Proyecto de empresa",
      },
      wialth: {
        short: "App fintech para iOS para aprender a controlar tus finanzas.",
        full: (
          <>
            Wialth es una app para iOS que ayuda a cualquier persona a controlar
            sus finanzas desde cero, sin necesidad de conocimientos financieros
            previos.
            <br />
            <br />
            Actualmente en desarrollo y en pleno rediseño y pivote de la idea
            inicial.
          </>
        ),
        button: "En Progreso",
      },
      taiko: {
        short: "SaaS de inventario impulsado por IA y RAG.",
        full: "Una plataforma SaaS que implementa IA para la gestión de inventarios y bases de datos de pequeñas empresas. Cuenta con un chatbot asesor potenciado por LLMs y arquitectura RAG, utilizando PostgreSQL y Bases de Datos Vectoriales para que los clientes consulten la disponibilidad y detalles de los productos fluídamente.",
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
      inkprep: {
        short: "Mobile App für Tätowierer, im App Store verfügbar.",
        full: "Mobile App für Color-Tätowierer, veröffentlicht und im App Store verfügbar. Ich leite das Projekt in allen Bereichen: Produkt, Design, Entwicklung, Marketing, App-Store-Präsenz und Nutzerwachstum.",
        button: "Im App Store ansehen",
      },
      videoOps: {
        short: "KI-Video-SaaS für E-Commerce-Unternehmen.",
        full: (
          <>
            Eine SaaS-Plattform, die die Videobibliotheken von
            E-Commerce-Unternehmen in eine organisierte, durchsuchbare
            Content-Datenbank verwandelt. Die KI analysiert jedes Video, um es
            automatisch zu taggen, zu kategorisieren, zu kuratieren und zu
            schneiden, damit Marketing-Teams nicht mehr Ordner durchsuchen
            müssen und deutlich schneller veröffentlichen.
            <br />
            <br />
            Intern bei BAKANO entwickelt: Das Produkt gehört dem Unternehmen,
            daher gibt es keine öffentliche Demo und kein Repository.
          </>
        ),
        button: "Privat · Firmenprojekt",
      },
      wialth: {
        short: "iOS-Fintech-App, um Finanzen von Grund auf zu lernen.",
        full: (
          <>
            Wialth ist eine iOS-App, die jedem hilft, die eigenen Finanzen von
            Grund auf in den Griff zu bekommen, ganz ohne finanzielle
            Vorkenntnisse.
            <br />
            <br />
            Derzeit in Entwicklung und mitten in einem kompletten Redesign und
            einem Pivot der ursprünglichen Idee.
          </>
        ),
        button: "In Arbeit",
      },
      taiko: {
        short: "KI-gestütztes Inventar-SaaS mit RAG.",
        full: "Eine SaaS-Plattform, die KI für das Inventarmanagement und Datenbanken kleiner Unternehmen implementiert. Verfügt über einen Beratungs-Chatbot, der von LLMs und der RAG-Architektur angetrieben wird und PostgreSQL sowie Vektordatenbanken nutzt, damit Kunden Produktverfügbarkeit und Details reibungslos abfragen können.",
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
      title: "Tattoo Inkprep",
      shortDescription: t.inkprep.short,
      description: t.inkprep.full,
      technologies: ["Flutter", "Dart", "REST APIs", "App Store Connect"],
      image: "/projects/tattoo_inkprep.png",
      githubLink:
        "https://apps.apple.com/us/app/tattoo-inkprep/id6779962402",
      buttonText: t.inkprep.button,
      color: "#FF2D55",
    },
    {
      title: "AI Video Content SaaS",
      shortDescription: t.videoOps.short,
      description: t.videoOps.full,
      technologies: [
        "TwelveLabs",
        "Claude",
        "RAG",
        "React",
        "Python",
        "Google Cloud",
        "Supabase",
        "n8n",
      ],
      image: "/projects/bakano_content_saas.png",
      githubLink: "",
      buttonText: t.videoOps.button,
      color: "#00C2FF",
    },
    {
      title: "Wialth",
      shortDescription: t.wialth.short,
      description: t.wialth.full,
      technologies: ["Flutter", "Dart", "iOS", "Supabase", "Riverpod"],
      image: "/projects/wialth.png",
      githubLink: "",
      buttonText: t.wialth.button,
      color: "#D9A38C",
    },
    {
      title: "TAIKO (TFG)",
      shortDescription: t.taiko.short,
      description: t.taiko.full,
      technologies: ["React", "FastAPI", "LLMs", "RAG", "Vector DB", "PostgreSQL"],
      image: "/projects/taiko_dashboard.png",
      githubLink: "https://github.com/Guillegas/Taiko",
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
