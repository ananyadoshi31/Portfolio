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

  const skills = [
    {
      icon: "🌐",
      title: "Website Development",
      desc: "I design and develop full-stack, responsive websites — from sketching intuitive UIs to writing clean, efficient frontend and backend code. Beyond just building, I focus on optimizing performance, integrating APIs, writing robust tests, and deploying to scale. My stack includes React, Next.js, Django, Flask, Ruby on Rails, Python, TypeScript, and JavaScript.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "I'm passionate about crafting cross-platform mobile apps for both Android and iOS. From building dynamic components and integrating seamless SDKs to implementing pagination and reducing API load times — I’ve handled it all. I typically use React Native for frontend and Firebase for backend, with Redux managing the state behind the scenes.",
    },
    {
      icon: "🧠",
      title: "Machine Learning",
      desc: "I thrive on solving real-world problems through data — from prediction and classification to anomaly detection and generative AI. My work spans computer vision, transfer learning, and recommendation systems. I’m fluent in TensorFlow, Keras, PyTorch, OpenCV, scikit-learn, NumPy, and Pandas.",
    },
  ];

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
              href="https://drive.google.com/uc?export=download&id=1JYffvMwPXlJsm-5mtChLGzFVifpAop8T"
              className="btn resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>

      <h2 className="what-i-do fade-on-scroll">What I Do</h2>

      <div className="cards-section">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <span className="icon">{skill.icon}</span>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
