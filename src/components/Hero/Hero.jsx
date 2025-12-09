import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";
import TextType from "../TextType.jsx";


export default function Hero() {
  const cursorRef = useRef(null); // Splash cursor container

  // Splash cursor effect (works on mouse + touch)
  useEffect(() => {
    const container = cursorRef.current;
    if (!container) return;

    const createSplash = (x, y) => {
      const splash = document.createElement("div");
      splash.className = "splash";
      splash.style.left = `${x}px`;
      splash.style.top = `${y}px`;
      container.appendChild(splash);

      splash.animate(
        [
          { transform: "scale(0)", opacity: 1 },
          { transform: "scale(1.5)", opacity: 0 },
        ],
        { duration: 500, easing: "ease-out" }
      );

      setTimeout(() => splash.remove(), 500);
    };

    const handleMouseMove = (e) => createSplash(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      for (let touch of e.touches) {
        createSplash(touch.clientX, touch.clientY);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={cursorRef}>
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

            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://github.com/jananikaavya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/janucodegirl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:jananikaavya1104@gmail.com" aria-label="Email">
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
                <img src="/avatar.png" alt="Janani - Full Stack Developer" className="floating-img" />
              </div>
            </div>
          </div>
        </div>
        </div>
     
    </section>
  );
}