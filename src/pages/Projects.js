// src/pages/Projects.js
import "../pages/Home.css";
import mlIcon from "../assets/ml-icon.png";
import appIcon from "../assets/app-icon.png";
import webIcon from "../assets/web-icon.png";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="section-content">
        <div className="project-row left">
          <img src={appIcon} alt="App Icon" className="project-icon" />
          <div className="project-desc">
            <h3>PikFresh App</h3>
            <p>
              A fruit quality inspector in your pocket. This mobile app
              leverages <span className="tech">ResNet50</span> and{" "}
              <span className="tech">OpenCV</span> to detect freshness in
              real-time. The magic? A{" "}
              <span className="tech">360° camera scanner</span> and a
              dynamically generated report — all within 40 seconds.
            </p>
          </div>
        </div>

        <div className="project-row right">
          <img src={webIcon} alt="Web Icon" className="project-icon" />
          <div className="project-desc">
            <h3>Food Surplus Management</h3>
            <p>
              Think Doordash meets sustainability. A full-stack app to reduce
              food waste, built using <span className="tech">Django</span>,{" "}
              <span className="tech">React Native</span>, and{" "}
              <span className="tech">SQLite</span>. Features include a
              location-based engine using <span className="tech">K-means</span>{" "}
              and a personalized engine using <span className="tech">SVD</span>.
              Users see the top 5 matches based on mood, meals, and math.
            </p>
          </div>
        </div>

        <div className="project-row left">
          <img src={webIcon} alt="Web Icon" className="project-icon" />
          <div className="project-desc">
            <h3>Movie Ticketing System</h3>
            <p>
              A complete booking experience built on{" "}
              <span className="tech">Ruby on Rails</span>, with{" "}
              <span className="tech">RSpec</span> powered backend validations
              and automated testing. Deployed on{" "}
              <span className="tech">AWS</span>, this website handles everything
              from user auth to showtime management and real-time ticketing —
              all backed by a strong <span className="tech">SQLite</span>{" "}
              database.
            </p>
          </div>
        </div>

        <div className="project-row right">
          <img src={mlIcon} alt="ML Icon" className="project-icon" />
          <div className="project-desc">
            <h3>Textile Anomaly Detection System</h3>
            <p>
              A smart defect detection pipeline that determines anaomalies in
              fabrics — powered by <span className="tech">CNNs</span>,{" "}
              <span className="tech">ResNet50</span>,{" "}
              <span className="tech">VGG16</span>, and{" "}
              <span className="tech">Autoencoders</span>. It doesn’t just detect
              fabric flaws, it reconstructs them. Trained on 80,000+ images and
              tested with custom pixel-level datasets.
            </p>
          </div>
        </div>

        <div className="project-row left">
          <img src={appIcon} alt="App Icon" className="project-icon" />
          <div className="project-desc">
            <h3>Social Media App</h3>
            <p>
              An Instagram-inspired clone made with{" "}
              <span className="tech">React Native</span>,{" "}
              <span className="tech">Formik</span>, and{" "}
              <span className="tech">Firebase</span>. It supports posting,
              commenting, and liking with real-time updates and secure{" "}
              <span className="tech">Yup</span>-validated auth. Over 70% users
              preferred its smooth UX over other clones.
            </p>
          </div>
        </div>

        <div className="project-row right">
          <img src={mlIcon} alt="ML Icon" className="project-icon" />
          <div className="project-desc">
            <h3>Pneumonia Disease Detection</h3>
            <p>
              Built using <span className="tech">OpenCV</span>,{" "}
              <span className="tech">TensorFlow</span>,{" "}
              <span className="tech">Keras</span>, and{" "}
              <span className="tech">scikit-learn</span>. This project optimized{" "}
              <span className="tech">ResNet50</span> and{" "}
              <span className="tech">VGG16</span> models to accurately identify
              pneumonia in chest X-rays. Fine-tuned with robust image
              preprocessing and hyperparameter tuning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
