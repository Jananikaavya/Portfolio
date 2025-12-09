import React from "react";
import "./ResumeModal.css";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="resume-overlay">
      <div className="resume-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <h2 className="resume-title">My Resume</h2>

        <iframe
          src="/JananiK Resume.pdf"
          className="resume-frame"
          title="Resume PDF Preview"
        ></iframe>

        <a
          href="/JananiK Resume.pdf"
          download
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
