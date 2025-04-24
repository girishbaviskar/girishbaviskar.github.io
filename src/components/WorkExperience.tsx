import React from "react";
import { content } from "../content";

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      {content.workExperience.map((job, index) => (
        <div key={index} className="work-item">
          <h3>{job.title}</h3>
          <p className="company-info">
            <strong>{job.company}</strong> • {job.location} • <span className="date">{job.date}</span>
          </p>
          <ul className="achievements-list">
            {job.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;