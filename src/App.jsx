import React, { useState } from "react";
import { useLanguage } from "./context/LanguageContext";
import { getProjects, myPhotos } from "./data/projectData.jsx";
import FaultyTerminal from "./components/FaultyTerminal";
import PhotoCarousel from "./components/PhotoCarousel";
import ProjectCarousel from "./components/ProjectCarousel";
import ProjectModal from "./components/ProjectModal";
import ContactGrid from "./components/ContactGrid";
import InteractiveProfile from "./components/InteractiveProfile";
import StackBento from "./components/StackBento";
import "./App.css";

function App() {
  const { t, switchLanguage, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Data for Carousels
  const myProjects = getProjects(language);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Close menu on mobile
      setMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="app-root">
      {/* Fixed Background */}
      <div className="terminal-bg">
        <FaultyTerminal
          pause={false}
          noiseAmp={0.5}
          glitchAmount={1.5}
          mouseReact={true}
          mouseStrength={0.2}
        />
      </div>

      {/* Project Modal Overlay */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Main Scrollable Content */}
      <div className="content-overlay">
        {/* Navigation */}
        <nav className="main-nav glass-panel">
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={menuOpen ? "nav-links open" : "nav-links"}>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a
                href="#estudios"
                onClick={(e) => handleNavClick(e, "estudios")}
              >
                {t.nav.studies}
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "experience")}
              >
                {t.nav.experience}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
              >
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a href="#stack" onClick={(e) => handleNavClick(e, "stack")}>
                {t.nav.stack}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                {t.nav.contact}
              </a>
            </li>
            <li className="language-flags">
              <button
                className={`flag-btn ${language === "es" ? "active" : ""}`}
                title="Español"
                onClick={() => switchLanguage("es")}
              >
                ES
              </button>
              <button
                className={`flag-btn ${language === "en" ? "active" : ""}`}
                title="English"
                onClick={() => switchLanguage("en")}
              >
                EN
              </button>
              <button
                className={`flag-btn ${language === "de" ? "active" : ""}`}
                title="Deutsch"
                onClick={() => switchLanguage("de")}
              >
                DE
              </button>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <header className="hero-section">
          <div className="hero-text">
            <h1 className="name-title">guillegas</h1>
            <h2 className="full-name" style={{ fontWeight: "bold" }}>
              Guillermo Andújar
            </h2>
            <h3
              className="role-subtitle"
              style={{ fontWeight: "bold", fontStyle: "italic" }}
              shadow="true"
            >
              {t.hero.role}
            </h3>
          </div>

          {/* Profile Photo */}
          <div className="hero-card">
            <div className="profile-frame">
              <InteractiveProfile />
            </div>
          </div>
        </header>

        {/* Content Sections (Blurred Overlay) */}
        <main className="main-sections">
          {/* 1. About Section */}
          <section id="about" className="content-block glass-panel grid-layout">
            <div className="text-content">
              <div style={{ position: "relative", width: "fit-content" }}>
                <h2>{t.about.title}</h2>
                <span
                  style={{
                    color: "var(--accent-color)",
                    position: "absolute",
                    top: "-15px",
                    left: "100%",
                    marginLeft: "5px",
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    textShadow: "0 0 15px var(--accent-color)",
                    width: "max-content",
                  }}
                ></span>
              </div>
              <p>{t.about.description}</p>
            </div>
            <div className="visual-content">
              <PhotoCarousel images={myPhotos} />
            </div>
          </section>

          {/* 2. Estudios Section (formerly Education) */}
          <section id="estudios" className="content-block glass-panel">
            <h2>{t.studies.title}</h2>
            <div className="timeline-container">
              {t.studies.items.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <h4>{item.school}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Experience Section */}
          <section id="experience" className="content-block glass-panel">
            <h2>{t.experience.title}</h2>
            <div className="experience-list">
              {t.experience.items.map((job, index) => (
                <div key={index} className="experience-card">
                  <div className="exp-header">
                    <h3>{job.title}</h3>
                    <span className="exp-date">{job.date}</span>
                  </div>
                  <h4 className="company-name">{job.company}</h4>
                  <ul>
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Projects Section */}
          <section
            id="projects"
            className="content-block glass-panel grid-layout-reverse"
          >
            <div className="text-content">
              <h2>{t.projects.title}</h2>
              <p>{t.projects.subtitle}</p>
            </div>
            <div className="visual-content full-width-mobile">
              <ProjectCarousel
                projects={myProjects}
                onSelectProject={setSelectedProject}
              />
            </div>
          </section>

          {/* 5. Stack Section */}
          <section id="stack" className="content-block glass-panel">
            <h2>{t.stack.title}</h2>
            <p style={{ marginBottom: "2rem" }}>{t.stack.subtitle}</p>
            <StackBento />
          </section>

          {/* 6. Contact Section */}
          <section id="contact" className="content-block glass-panel">
            <h2>{t.contact.title}</h2>
            <p style={{ marginBottom: "2rem" }}>{t.contact.subtitle}</p>
            <ContactGrid />
          </section>
        </main>

        <footer className="app-footer glass-panel">
          <p>{t.footer}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
