import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect } from "react";

function App() {
  // Add event listener to prevent default click behavior
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName !== 'A' && 
          (e.target as HTMLElement).tagName !== 'BUTTON') {
        e.preventDefault();
      }
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="App">
      <Navigation />
      <About />
      <main>
        <Education />
        <WorkExperience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
