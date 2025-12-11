import React from "react";
import "./StackBento.css";
import { useLanguage } from "../context/LanguageContext";

const stackData = {
  frontend: [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "ReactJS", icon: "devicon-react-original colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
  ],
  backend: [
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "NodeJS", icon: "devicon-nodejs-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
  ],
  learning: [
    { name: "Angular", icon: "devicon-angularjs-plain colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
    { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  ],
  tools: [
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Terminal", icon: "devicon-bash-plain" },
    { name: "VSCode", icon: "devicon-vscode-plain colored" },
    { name: "npm", icon: "devicon-npm-original-wordmark colored" },
  ],
};

export default function StackBento() {
  const { t } = useLanguage();
  return (
    <div className="stack-bento-container">
      {Object.entries(stackData).map(([category, techs]) => (
        <div key={category} className="bento-box glass-panel">
          <h3 className="bento-title">{t.stack.categories[category]}</h3>
          <div className="bento-grid">
            {techs.map((tech) => (
              <div key={tech.name} className="tech-item">
                <i className={`tech-icon ${tech.icon}`}></i>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
