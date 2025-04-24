import React from "react";
import { content } from "../content";

const About: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Hi, I'm {content.name}👋</h1>
        <p>
          A passionate software engineer with expertise in full-stack development
        </p>
        <p className="contact-info">
          {content.contact.email} | {" "}
          <a href={`https://${content.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          | {" "}
          <a href={`https://${content.contact.github}`} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </header>
  );
};

export default About;