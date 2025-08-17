import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "experience",
        "education",
        "projects",
        "publications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Left Sidebar Navigation */}
      <nav className="sidebar">
        <div className="sidebar-content">
          <div className="logo">
            <h2>Ananya</h2>
            <p>Portfolio</p>
          </div>

          <ul className="nav-menu">
            <li>
              <button
                className={activeSection === "home" ? "active" : ""}
                onClick={() => scrollToSection("home")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={activeSection === "experience" ? "active" : ""}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className={activeSection === "education" ? "active" : ""}
                onClick={() => scrollToSection("education")}
              >
                Education
              </button>
            </li>
            <li>
              <button
                className={activeSection === "projects" ? "active" : ""}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={activeSection === "publications" ? "active" : ""}
                onClick={() => scrollToSection("publications")}
              >
                Achievements
              </button>
            </li>
            <li>
              <button
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="contact-info">
            <p>📞 <a href="tel:+19195207478">+1 (919) 520-7478</a></p>
            <p>✉️ <a href="mailto:avdoshi@ncsu.edu">avdoshi@ncsu.edu</a></p>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="publications">
          <Publications />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
