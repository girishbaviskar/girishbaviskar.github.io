import React from "react";
import { content } from "../content";

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {content.projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.name}</h3>
          <div className="project-tech">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
          <ul className="achievements-list">
            {project.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;