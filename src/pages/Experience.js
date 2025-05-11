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
import { FaCode, FaReact, FaLaptopCode, FaHandsHelping } from "react-icons/fa";
import "../pages/Home.css";

export default function Experience() {
  return (
    <div className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaCode />
          </div>
          <div className="timeline-card">
            <h3>Open Source Project</h3>
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
