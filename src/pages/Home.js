import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "./Home.css";
import heroImg from "../assets/ananya-hero.png";

export default function Home() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".fade-on-scroll")
      .forEach((el) => observer.observe(el));

    // Apply VanillaTilt
    skillRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });
  }, []);

  const techStacks = {
    languages: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "Java",
      "SQL",
      "HTML",
      "CSS",
    ],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    frameworks: [
      "React",
      "React Native",
      "Next.js",
      "Django",
      ".NET",
      "Node.js",
      "Redux",
      "Ruby on Rails",
      "REST APIs",
    ],
    tools: ["Git", "GitHub", "AWS", "Docker", "Firebase", "Figma"],
    libraries: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "PyTorch",
      "Matplotlib",
      "NumPy",
      "Pandas",
    ],
  };

  return (
    <div className="home">
      <div className="hero-section">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={heroImg}
            alt="Ananya working on laptop"
            className="hero-image"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="hero-title">Hey, I'm Ananya!</h1>
          <div className="hero-buttons">
            <a
              href="https://github.com/ananyadoshi31"
              target="_blank"
              rel="noreferrer"
              className="btn github"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ananya-doshi-49657b218/"
              target="_blank"
              rel="noreferrer"
              className="btn linkedin"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1aREc-xnvABeh2piOJL11nAOxaEKvLr_e/view?usp=sharing"
              className="btn resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>

      <div className="what-i-do-section">
        <div className="summary-section">
          <motion.div
            className="summary-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="summary-content">
              <h3>Full-Stack Developer & AI Enthusiast</h3>
              <p style={{ fontSize: "1.8rem" }}>
                A passionate developer with expertise in building scalable web
                applications, mobile apps, and intelligent ML systems.
                Proficient in optimizing performance, integrating APIs, and
                delivering seamless user experiences from concept to deployment.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="tech-stack-section">
          <div className="tech-stack-container">
            <h2 className="section-title">🚀 Tech Stack</h2>
            <div className="tech-showcase">
              {Object.entries(techStacks).map(([category, items], index) => (
                <motion.div
                  key={category}
                  className="tech-category-modern"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <h3 className="category-title">
                    {category === "languages" && "💻 Languages"}
                    {category === "databases" && "🗄️ Databases"}
                    {category === "frameworks" && "🧩 Frameworks"}
                    {category === "tools" && "🛠️ Tools"}
                    {category === "libraries" && "📚 Libraries"}
                  </h3>
                  <div className="tech-pills">
                    {items.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="tech-pill"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: index * 0.1 + techIndex * 0.05,
                          duration: 0.4,
                        }}
                        whileHover={{ scale: 1.05, backgroundColor: "#00bcd4" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
