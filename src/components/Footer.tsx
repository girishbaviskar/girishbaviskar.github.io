import React from "react";
import { content } from "../content";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href={`https://${content.contact.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`https://${content.contact.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${content.contact.email}`}>Email</a>
        </div>
        <p className="copyright">&copy; {currentYear} {content.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;