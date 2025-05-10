// src/pages/Education.js
import "../pages/Home.css";
import ncsuLogo from "../assets/ncsu-logo.png";
import djsceLogo from "../assets/djsce-logo.png";

export default function Education() {
  return (
    <div className="education">
      <h2 className="section-title">Education</h2>
      <div className="section-content">
        <div className="section-card">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src={ncsuLogo}
              alt="NCSU Logo"
              style={{ width: "60px", height: "60px" }}
            />
            <h3 style={{ margin: 0 }}>North Carolina State University</h3>
          </div>
          <p style={{ marginTop: "15px" }}>
            Master’s in Computer Science (2024 – 2026)
            <br />
            <strong>GPA:</strong> 4.0/4.0
            <br />
            <strong>Courses:</strong> Algorithms, Software Engineering, Object
            Oriented Design & Development, Devops
          </p>
        </div>
        <div className="section-card">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src={djsceLogo}
              alt="DJSCE Logo"
              style={{ width: "60px", height: "60px" }}
            />
            <h3 style={{ margin: 0 }}>
              Dwarkadas J. Sanghvi College of Engineering
            </h3>
          </div>
          <p style={{ marginTop: "15px" }}>
            B.Tech in Computer Engineering with Honors in Intelligent Computing
            (2020 – 2024)
            <br />
            <strong>GPA:</strong> 4.0/4.0
            <br />
            <strong>Courses:</strong> Data Structures, Operating Systems,
            Database Management Systems, Distributed Computing, Artificial
            Intelligence, Machine Learning
          </p>
        </div>
      </div>
    </div>
  );
}
