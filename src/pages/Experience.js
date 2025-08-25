// // src/pages/Experience.js
// import "../pages/Home.css";

// export default function Experience() {
//   return (
//     <div className="experience">
//       <h2 className="section-title">Experience</h2>
//       <div className="section-content">
//         <div className="section-card animate-delay-1">
//           <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//             <h3 style={{ margin: 0 }}>Open Source Project</h3>
//           </div>
//           <p style={{ marginTop: "15px" }}>
//             <strong>Role:</strong> Backend Developer (Feb 2025 – Apr 2025)
//             <br />
//             <strong>Responsibilities:</strong>
//             <br />
//             – Worked on the backend of an existing website (Expertiza) using
//             Ruby on Rails, creating APIs, testing on Postman and deployed it on
//             AWS.
//             <br />
//             – Refactored the existing code in accordance with design principles,
//             ensuring seamless compatibility across all classes and files.
//             <br />
//             – Conducted model and controller testing, achieving a 95% test
//             coverage and debugged and resolved errors in the code, enhancing
//             websire performance.
//             <br />– Created comprehensive design documentation on Expertiza -
//             Wiki page.
//           </p>
//         </div>

//         <div className="section-card animate-delay-1">
//           <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//             <h3 style={{ margin: 0 }}>
//               Ascorb Technologies Pvt. Ltd. – Edmingle
//             </h3>
//           </div>
//           <p style={{ marginTop: "15px" }}>
//             <strong>Role:</strong> Software Engineer Intern (Jun 2023 – Sep
//             2023)
//             <br />
//             <strong>Responsibilities:</strong>
//             <br />
//             – Developed a student-faculty portal using ReactJS, reducing admin
//             workload by 30%, benefiting 1.5M users.
//             <br />
//             – Enhanced Zoom desktop Meeting Application functionality with
//             Electron SDK and integratedit to a third party website.
//             <br />
//             – Executed ReactJS CRUD for product search, improving filter
//             response time across 450+ items.
//             <br />– Authored technical documentation improving team handoff
//             efficiency by 15%.
//           </p>
//         </div>

//         <div className="section-card animate-delay-2">
//           <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//             <h3 style={{ margin: 0 }}>Skilligence Edtech</h3>
//           </div>
//           <p style={{ marginTop: "15px" }}>
//             <strong>Role:</strong> Frontend Web Developer Intern (Apr 2023 – Jun
//             2023)
//             <br />
//             <strong>Responsibilities:</strong>
//             <br />
//             – Designed UI wireframes on Figma and implemented a wide range of
//             frontend features and components using React and TypeScript.
//             <br />
//             – Increased user retention rate by 45%.
//             <br />– Debugged and fixed production bugs, boosting performance by
//             30%.
//           </p>
//         </div>

//         <div className="section-card animate-delay-3">
//           <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//             <h3 style={{ margin: 0 }}>Suvidha Foundation</h3>
//           </div>
//           <p style={{ marginTop: "15px" }}>
//             <strong>Role:</strong> Web Developer Intern (Dec 2022 – Jan 2023)
//             <br />
//             <strong>Responsibilities:</strong>
//             <br />
//             – Designed responsive UI dashboards for an NGO website from scratch
//             and hosted it on Netlify.
//             <br />
//             – Created 6 custom dashboards increasing engagement by 20%.
//             <br />– Led a fundraising campaign raising ₹4,000+, increasing
//             donations by 10%.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import {
  FaCode,
  FaReact,
  FaLaptopCode,
  FaHandsHelping,
  FaMobile,
  FaDatabase,
} from "react-icons/fa";
import "../pages/Home.css";

export default function Experience() {
  return (
    <div className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaLaptopCode />
          </div>
          <div className="timeline-card">
            <h3>ReFiBuy AI</h3>
            <p>
              <strong>Role:</strong> Software Engineer Intern (Aug 2025 – Jan
              2026)
            </p>
            <p>
              – Spearheaded prompt engineering in Langfuse for Agentic AI
              product scoring, enabling adaptive decision-making across diverse
              e-commerce sources, reducing catalog enrichment time by 20%.
              <br />
              – Built user interfaces in Next.js, integrating with .NET APIs,
              enabling processing of 100K products daily.
              <br />– Optimized PostgreSQL queries and deployed scalable
              solutions on Azure with 100% uptime in production.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaMobile />
          </div>
          <div className="timeline-card">
            <h3>Everything Parlays</h3>
            <p>
              <strong>Role:</strong> Software Engineer Intern (June 2025 – Aug
              2025)
            </p>
            <p>
              – Delivering production-ready features for an iOS app with React
              Native, increasing user engagement by 26%.
              <br />
              – Implementing scalable backend services with MongoDB and AWS CDK,
              decreasing average API response times by 15%.
              <br />
              – Designing and optimizing event-driven architecture for real-time
              notification system, supporting 5,000+ concurrent users.
              <br />– Automating CI/CD workflows with GitHub actions,
              accelerating release velocity by 33%.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaDatabase />
          </div>
          <div className="timeline-card">
            <h3>
              NC State University, Department of Forestry and Environmental
              Resources
            </h3>
            <p>
              <strong>Role:</strong> Research Assistant (May 2025 – July 2025)
            </p>
            <p>
              – Built and optimized ML pipelines to predict water quality
              indicators with up to 12% accuracy improvement.
              <br />
              – Applied cloud-based tools and distributed computing principles
              to support large datasets, enhance processing speed by 8%.
              <br />– Implemented data ingestion and visualization pipelines to
              enable actionable insights for decision-making.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaCode />
          </div>
          <div className="timeline-card">
            <h3>Expertiza (Open-Source Project)</h3>
            <p>
              <strong>Role:</strong> Backend Developer (Feb 2025 – Apr 2025)
            </p>
            <p>
              – Worked on backend of Expertiza using Ruby on Rails, created
              APIs, tested with Postman and deployed to AWS.
              <br />
              – Refactored code to meet design principles and ensured
              system-wide compatibility.
              <br />
              – Conducted model/controller testing with 95% coverage.
              <br />– Documented backend architecture in Expertiza Wiki.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/valorant-dhruv/reimplementation-back-end"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
              <a
                href="https://wiki.expertiza.ncsu.edu/index.php?title=CSC/ECE_517_Spring_2025_E2515:_Reimplement_student_teams_controller.rb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Design Documentation
              </a>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaReact />
          </div>
          <div className="timeline-card">
            <h3>Ascorb Technologies Pvt. Ltd. – Edmingle</h3>
            <p>
              <strong>Role:</strong> Software Engineer Intern (Jun 2023 – Sep
              2023)
            </p>
            <p>
              – Built student-faculty portal in ReactJS, reducing admin load by
              30%.
              <br />
              – Enhanced Zoom desktop with Electron SDK; integrated third-party
              tools.
              <br />
              – Developed CRUD filters; improved response time across 450+
              products.
              <br />– Wrote technical docs to ease knowledge transfer.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaLaptopCode />
          </div>
          <div className="timeline-card">
            <h3>Skilligence Edtech</h3>
            <p>
              <strong>Role:</strong> Frontend Web Developer Intern (Apr 2023 –
              Jun 2023)
            </p>
            <p>
              – Designed UI wireframes on Figma, implemented in
              React/TypeScript.
              <br />
              – Increased user retention by 45%.
              <br />– Debugged and optimized code; performance up by 30%.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaHandsHelping />
          </div>
          <div className="timeline-card">
            <h3>Suvidha Foundation</h3>
            <p>
              <strong>Role:</strong> Web Developer Intern (Dec 2022 – Jan 2023)
            </p>
            <p>
              – Designed and deployed responsive UI dashboards.
              <br />
              – Created 6 dashboards that boosted engagement by 20%.
              <br />– Led fundraising campaign; raised ₹4,000+ and improved
              donations by 10%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
