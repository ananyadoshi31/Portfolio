// src/components/Footer.js
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Ananya Doshi. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:doshiananya2002@gmail.com">Email</a>
          <a
            href="https://github.com/ananyadoshi31"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ananya-doshi-49657b218/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
