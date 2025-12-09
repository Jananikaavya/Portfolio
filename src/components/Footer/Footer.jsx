import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Social Links */}
        <div className="footer-social">
          <a
            href="https://github.com/jananikaavya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/janucodegirl/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:jananikaavya1104@gmail.com"
            aria-label="Email"
            className="footer-icon"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Center - Credits */}
        <div className="footer-center">
          <p className="footer-made-with">
            Made with <FaHeart className="heart-icon" /> by Janani
          </p>
          <p className="footer-copyright">
            © {currentYear} All rights reserved.
          </p>
        </div>

        {/* Right - Live Clock */}
        <div className="footer-clock">
          <div className="clock-display">
            <span className="clock-digit">{hours}</span>
            <span className="clock-separator">:</span>
            <span className="clock-digit">{minutes}</span>
            <span className="clock-separator">:</span>
            <span className="clock-digit">{seconds}</span>
          </div>
          <span className="clock-timezone">IST</span>
        </div>
      </div>
      
    </footer>
  );
}