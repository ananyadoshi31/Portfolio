// src/pages/Publications.js
import "../pages/Home.css";

export default function Publications() {
  return (
    <div className="publications">
      <h2 className="section-title">Beyond the Code</h2>

      <div className="section-content">
        <div className="section-card animate-delay-1">
          <h3>📚 Publications</h3>
          <p>
            • Fabric Quality Assurance System –{" "}
            <span className="tech">IJISAE Journal</span>
            <br />• Systematic Review of Textile Anomaly Detection –{" "}
            <span className="tech">IEEE</span>
            <br />• Pneumonia Detection using DNNs –{" "}
            <span className="tech">Springer</span>
            <br />• PikFresh – Fruit Quality Detection –{" "}
            <span className="tech">IEEE</span>
            <br />• Food Surplus Recommendation System –{" "}
            <span className="tech">IEEE</span>
          </p>
        </div>

        <div className="section-card animate-delay-2">
          <h3>📜 Certifications</h3>
          <p>
            • Machine Learning for All –{" "}
            <span className="tech">University of London</span>, Coursera, Dec
            2021
            <br />• Managing ML Projects –{" "}
            <span className="tech">Google Cloud</span>, Coursera, Jan 2022
            <br />• ML with Python – <span className="tech">IBM</span>,
            Coursera, Feb 2022
            <br />• Deep Learning CV –{" "}
            <span className="tech">University of Colorado</span>, Coursera, Feb
            2022
            <br />• Intro to CV & Image Processing –{" "}
            <span className="tech">IBM</span>, Coursera, Mar 2022
            <br />• Predicting Safety Stock –{" "}
            <span className="tech">LearnQuest</span>, Coursera, Mar 2022
          </p>
        </div>

        <div className="section-card animate-delay-3">
          <h3>🏆 Hackathons & Leadership</h3>
          <p>
            • Co-Head Publicity – <span className="tech">DJSCE ACM</span>: Led
            campaigns, hosted hackathons, formed partnerships, and scaled reach
            across 5+ colleges.
            <br />• Participated – Hackathons like{" "}
            <span className="tech">Lines of Code 4.0</span>,{" "}
            <span className="tech">Stratagem 2023</span>,{" "}
            <span className="tech">Smart India Hackathon - 2023</span> ,
            showcasing tech creativity and impact.
            <br />• Developer –{" "}
            <span className="tech">e-Designs & e-GI Challenge</span>: Created
            web and mobile portal for Intellectual Property Office of India.
          </p>
        </div>
      </div>
    </div>
  );
}
