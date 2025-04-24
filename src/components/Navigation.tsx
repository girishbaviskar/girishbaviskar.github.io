import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          GB
        </div>
        <ul className="nav-links">
          <li onClick={() => scrollToSection("education")}>Education</li>
          <li onClick={() => scrollToSection("work-experience")}>Experience</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;