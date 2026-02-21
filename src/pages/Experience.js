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
  FaReact,
  FaLaptopCode,
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
              <strong>Role:</strong> Software Engineer Intern (Aug 2025 – Present)
            </p>
            <p>
              – Spearheaded prompt engineering in Langfuse for Agentic AI product scoring, leveraging RAG models to enhance catalog quality across diverse e-commerce sources, reducing enrichment time by 20%.
              <br />
              – Built Next.js frontend integrated with .NET APIs and shipped a CI/CD pipeline for automated end-to-end testing with Playwright, including real-time alert monitoring for test failures, improving production reliability by 25%.
              <br />
              – Containerized services using Docker, enhanced PostgreSQL schemas and built a unified API gateway to centralize 15+ backend endpoints, reducing API latency by 25%.
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
              <strong>Role:</strong> Software Engineer Intern (Jun 2025 – Aug 2025)
            </p>
            <p>
              – Delivered production-ready features for an iOS app with React Native, increasing user engagement by 26%.
              <br />
              – Deployed scalable backend services with MongoDB and AWS Lambda, improving system throughput by 15%.
              <br />
              – Designed a real-time chat and event-driven notification system, ensuring scalability and reliable messaging for 1M+ users.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaDatabase />
          </div>
          <div className="timeline-card">
            <h3>NC State University</h3>
            <p>
              <strong>Role:</strong> Research Assistant (May 2025 – Jul 2025)
            </p>
            <p>
              – Engineered and streamlined ML pipelines on Linux to predict water quality indicators, improving model accuracy by 12%.
              <br />
              – Implemented data ingestion and transformation pipelines using Apache Spark, processing multi-source water quality datasets and enhancing processing speed by 8%.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaReact />
          </div>
          <div className="timeline-card">
            <h3>Ascorb Technologies Pvt Ltd</h3>
            <p>
              <strong>Role:</strong> Software Engineer Intern (Jun 2023 – Sep 2023)
            </p>
            <p>
              – Developed web-app platform using React and TypeScript, with Redux for state management serving over 1.5M+ users.
              <br />
              – Upgraded Zoom video conferencing tool with new features via Electron, cutting user-reported issues by 15%.
              <br />
              – Integrated backend APIs in NodeJS and collaborated on design documentation, accelerating project velocity by 22%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
