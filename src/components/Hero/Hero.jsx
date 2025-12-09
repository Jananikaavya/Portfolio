import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";
import TextType from "../TextType.jsx";

export default function Hero() {
  // Add a console log to see if component renders multiple times
  console.log("Hero component rendered");

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="intro-heading">I AM JANANI</h1>

            <h2 className="hero-title">
              <TextType
                text={[
                  "",
                  "Full-Stack Developer",
                  "Web Enthusiast",
                  "Problem Solver",
                ]}
                as="span"
                typingSpeed={75}
                pauseDuration={1500}
                deletingSpeed={40}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#ffffff", "#9d174d", "#41a6ff", "#ffb800"]}
                className="hero-title-text"
              />
            </h2>

            <div className="hero-desc">
              <p>
                I'm a passionate <strong>Full-Stack Developer</strong> with experience building
                performant web applications using React, Node.js, and modern tooling. I focus on
                readable code, accessible interfaces, and delightful user experiences.
              </p>
              <p>
                I enjoy collaborating with cross-functional teams, shipping production-ready
                features, and contributing to open-source. Outside of coding I like design,
                learning new frameworks, and mentoring junior developers.
              </p>
            </div>

            {/* Social Links - with unique test ID */}
            <div className="links">
              <a
                href="https://github.com/jananikaavya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                data-social="github"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/janucodegirl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-social="linkedin"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:jananikaavya1104@gmail.com" 
                aria-label="Email"
                data-social="email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          <div className="profile-container">
            <div className="square-frame">
              <div className="profile-image">
                <img 
                  src="/avatar.png" 
                  alt="Janani - Full Stack Developer" 
                  className="floating-img" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}