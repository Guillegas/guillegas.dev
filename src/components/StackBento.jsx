import React from "react";
import "./StackBento.css";
import { useLanguage } from "../context/LanguageContext";

const stackData = {
  frontend: [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "ReactJS", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "Astro", icon: "devicon-astro-plain colored" },
    { name: "Angular", icon: "devicon-angularjs-plain colored" },
    { name: "Flutter", icon: "devicon-flutter-plain colored" },
    { name: "Dart", icon: "devicon-dart-plain colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
    { name: "shadcn/ui", text: "ui" },
    { name: "Vite", icon: "devicon-vitejs-plain colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
  ],
  backend: [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
    { name: "NodeJS", icon: "devicon-nodejs-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "Supabase", icon: "devicon-supabase-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
  ],
  ai: [
    { name: "Claude", text: "✳" },
    { name: "RAG", text: "RAG" },
    { name: "TwelveLabs", text: "12L" },
    { name: "n8n", text: "n8n" },
    { name: "Make", text: "MK" },
    { name: "Vector DB", text: "VDB" },
    { name: "NumPy", icon: "devicon-numpy-plain colored" },
    { name: "scikit-learn", icon: "devicon-scikitlearn-plain colored" },
  ],
  tools: [
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Google Cloud", icon: "devicon-googlecloud-plain colored" },
    { name: "Vercel", icon: "devicon-vercel-original" },
    { name: "Netlify", icon: "devicon-netlify-plain colored" },
    { name: "Xcode", icon: "devicon-xcode-plain colored" },
    { name: "App Store", icon: "devicon-apple-original" },
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
                {tech.icon ? (
                  <i className={`tech-icon ${tech.icon}`}></i>
                ) : (
                  // Brands with no devicon glyph: monogram tile instead.
                  <span className="tech-icon tech-icon-text">{tech.text}</span>
                )}
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
