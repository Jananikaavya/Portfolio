import React, { useEffect, useRef } from "react";
import "./About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  // Replace these with your real education items
  { year: "2022 – 2026", title: "B.E Computer Science & Engineering", place: "Jaya Engineering College" },
  { year: "2020 – 2022", title: "HSC", place: "Sudharsanam Vidyaashram CBSE School" },
  { year: "2018 – 2020", title: "SSLc", place: "Sudharsanam Vidyaashram CBSE School" },
];

const skillsData = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 75 },
  { name: "JavaScript", percent: 78 },
  { name: "React", percent: 85 },
  { name: "Node.js", percent: 70 },
  { name: "SQL", percent: 72 },
   { name: "Python", percent: 92 },
    { name: "MERAN Stack", percent: 98},
];

export default function About() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(".about-header h2", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-header", start: "top 85%" },
      });

      // Bio right slide-in
      gsap.from(".bio-right", {
        x: 36,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: ".bio-container", start: "top 80%" },
      });

      // Timeline cards - horizontal slide from right with stagger
      gsap.from(".timeline-card", {
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".timeline-section", start: "top 80%" },
      });

      // Animate inner vertical dot connector (subtle pop)
      gsap.from(".timeline-dot", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.4)",
        stagger: 0.08,
        scrollTrigger: { trigger: ".timeline-section", start: "top 85%" },
      });

      // Skills: animate bars width on scroll
      const skillFills = gsap.utils.toArray(".skill-fill");
      skillFills.forEach((fill) => {
        const percent = parseInt(fill.dataset.percent, 10) || 0;
        gsap.fromTo(
          fill,
          { width: "0%" },
          {
            width: `${percent}%`,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: fill,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Optional: subtle rise for skill cards
      gsap.from(".skill-card", {
        y: 18,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".skills-section", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Horizontal slider drag behavior
  useEffect(() => {
    const slider = timelineRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onPointerDown = (e) => {
      isDown = true;
      slider.classList.add("is-dragging");
      startX = e.pageX ?? (e.touches && e.touches[0].pageX);
      scrollLeft = slider.scrollLeft;
    };

    const onPointerMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX ?? (e.touches && e.touches[0].pageX);
      const walk = startX - x;
      slider.scrollLeft = scrollLeft + walk;
    };

    const onPointerUp = () => {
      isDown = false;
      slider.classList.remove("is-dragging");
    };

    slider.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Touch fallback
    slider.addEventListener("touchstart", onPointerDown, { passive: false });
    slider.addEventListener("touchmove", onPointerMove, { passive: false });
    slider.addEventListener("touchend", onPointerUp);

    // wheel horizontal scroll support (Ctrl/wheel or shift)
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > 0 || e.shiftKey) {
        // let natural horizontal scroll occur
        return;
      }
      if (Math.abs(e.deltaY) > 0) {
        // convert vertical wheel to horizontal scroll for slider
        slider.scrollLeft += e.deltaY;
      }
    };
    slider.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      slider.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      slider.removeEventListener("touchstart", onPointerDown);
      slider.removeEventListener("touchmove", onPointerMove);
      slider.removeEventListener("touchend", onPointerUp);
      slider.removeEventListener("wheel", onWheel);
    };
  }, []);

  const scrollTimeline = (dir = "left") => {
    const el = timelineRef.current;
    if (!el) return;
    const step = Math.max(el.clientWidth * 0.7, 300);
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section className="about-section premium" ref={sectionRef}>
      {/* Header */}
      <div className="about-header">
        <h5>About Me</h5>
        <h2>A Passionate Developer Who Loves to Code</h2>
      </div>

      {/* BIO */}
      <div className="bio-container">
        <div className="bio-left">
          <div className="glass-photo">
            <img src="/jaini.jpg" alt="Profile" />
            <div className="years-badge">
              <h3>3</h3>
              <p>Successful Years</p>
            </div>
          </div>
        </div>

        <div className="bio-right">
          <h3>My Bio</h3>
          <p>
            Hello! I'm a developer building modern, responsive web apps focused on performance, accessibility and delightful user experiences.
            I enjoy collaborating across teams and mentoring juniors.
          </p>

          <div className="bio-details">
            <div><strong>Name:</strong> Janani K</div>
            <div><strong>Email:</strong> jananikaavya1104@gmail.com</div>
            <div><strong>Phone:</strong> +91 7200328633</div>
            <div><strong>Address:</strong> Avadi, Chennai</div>
            <div><strong>DOB:</strong> Nov 17, 2004</div>
            <div><strong>Freelance:</strong> Available</div>
          </div>

          <a className="download-btn" href="/JANANI K Resume.pdf" download>
            <i className="fa-solid fa-download"></i> Download CV
          </a>
        </div>
      </div>

    {/* VERTICAL EDUCATION TIMELINE (MATCHES CONNECT WITH ME STYLE) */}
<div className="education-section">
  <h3 className="edu-title">My Education Journey</h3>

  <div className="edu-timeline">
    <div className="edu-line"></div>

    <div className="edu-items">
      {educationData.map((edu, i) => (
        <div className="edu-row" key={i}>
          <div className="edu-icon-box">
            <div className="edu-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
          </div>

          <div className="edu-card">
            <p className="edu-year">2022{edu.year}</p>
            <h4 className="edu-course">{edu.title}</h4>
            <p className="edu-place">{edu.place}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* SKILLS */}
      <div className="skills-section">
        <h3>Skills & Expertise</h3>

        <div className="skills-grid">
          {skillsData.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-meta">
                <h4>{skill.name}</h4>
                <span className="skill-percent-label">{skill.percent}%</span>
              </div>

              <div className="skill-bar" aria-hidden="true">
                <div
                  className="skill-fill"
                  data-percent={skill.percent}
                  role="presentation"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}