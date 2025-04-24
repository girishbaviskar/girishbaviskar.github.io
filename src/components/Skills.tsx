import React from "react";
import { content } from "../content";

const Skills: React.FC = () => {
  // Group skills by category
  const skillCategories = {
    "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C/C++"],
    "Frameworks & Libraries": ["React", "Angular", "Express", "Node.js", "GraphQL", "Jest", "MongoDB", "MySQL", "PostgreSQL", "HTML", "CSS"],
    "DevOps & Cloud": ["AWS (Lambda, S3, EC2)", "GCP", "Docker", "Docker Compose", "Kubernetes", "Linux", "Jenkins", "GitLab CI", "Travis", "Maven"],
    "Other Tools": ["Git", "GitHub", "BitBucket", "RESTful APIs", "Microservices", "NoSQL", "Postman", "Mockito", "JUnit", "Jersey", "Azure"]
  };

  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;