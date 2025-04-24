import React from "react";
import { content } from "../content";

const Education: React.FC = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      {content.education.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.institution}</h3>
          <p><strong>{edu.degree}</strong> <span className="date">({edu.date})</span></p>
          {edu.gpa && <p className="gpa">GPA: <strong>{edu.gpa}</strong></p>}
          {edu.courses && (
            <div className="courses">
              <h4>Relevant Coursework</h4>
              <div className="skills-container">
                {edu.courses.map((course, idx) => (
                  <span key={idx} className="skill-pill">{course}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Education;