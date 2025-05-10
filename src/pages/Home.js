import { useEffect } from "react";
import "./Home.css";
import heroImg from "../assets/ananya-hero.png";

export default function Home() {
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
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-left fade-on-scroll">
          <img
            src={heroImg}
            alt="Ananya working on laptop"
            className="hero-image"
          />
        </div>
        <div className="hero-right fade-on-scroll">
          <h1 className="hero-title">Hi, I'm Ananya Doshi</h1>
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
          </div>
        </div>
      </div>

      <h2 className="what-i-do fade-on-scroll">What I Do</h2>
      <div className="cards-section">
        <div className="skill-card fade-on-scroll">
          <span className="icon">🌐</span>
          <h3>Website Development</h3>
          <p>
            I design and develop full-stack, responsive websites — from
            sketching intuitive UIs to writing clean, efficient frontend and
            backend code. Beyond just building, I focus on optimizing
            performance, integrating APIs, writing robust tests, and deploying
            to scale. Some technologies I am proficient with include - React,
            Next.js, Django, Flask, Restful APIs Ruby on Rails, Python,
            TypeScript, and JavaScript.
          </p>
        </div>
        <div className="skill-card fade-on-scroll">
          <span className="icon">📱</span>
          <h3>Mobile App Development</h3>
          <p>
            I'm passionate about crafting cross-platform mobile apps for both
            Android and iOS. From building dynamic components and integrating
            seamless SDKs to implementing pagination and reducing API load times
            — I’ve handled it all. I typically use React Native for frontend and
            Firebase for backend, with Redux managing the state behind the
            scenes.
          </p>
        </div>
        <div className="skill-card fade-on-scroll">
          <span className="icon">🧠</span>
          <h3>Machine Learning</h3>
          <p>
            I thrive on solving real-world problems through data — from
            prediction and classification to anomaly detection and generative
            AI. My experience spans computer vision, transfer learning, and
            recommendation systems including projects like fruit quality
            detection and personalized suggestions. I’m fluent in tools like
            TensorFlow, Keras, PyTorch, OpenCV, scikit-learn, NumPy, Pandas, and
            more — and I love diving into complex datasets to uncover insights
            that drive smart decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
