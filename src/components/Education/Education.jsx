import React from "react";
import "./EducationTimeline.css";
import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export default function EducationTimeline() {
  const education = [
    {
      year: "2021 – 2025",
      title: "Bachelor of Computer Science Engineering",
      place: "Your College Name",
      icon: <FaGraduationCap />,
    },
    {
      year: "2020 – 2021",
      title: "Higher Secondary Education (HSC)",
      place: "Your School Name",
      icon: <MdSchool />,
    },
    {
      year: "2018 – 2019",
      title: "SSLC",
      place: "Your School Name",
      icon: <MdSchool />,
    }
  ];

  return (
    <div className="edu-wrapper">
      <h3 className="edu-title">Education Timeline</h3>

      <div className="edu-timeline-container">
        {/* Vertical Neon Line */}
        <div className="edu-line"></div>

        {/* Items */}
        <div className="edu-items">
          {education.map((item, index) => (
            <div className="edu-row" key={index}>
              
              <div className="edu-icon-box">
                <div className="edu-icon">{item.icon}</div>
              </div>

              <div className="edu-card">
                <p className="edu-year">{item.year}</p>
                <h4 className="edu-course">{item.title}</h4>
                <p className="edu-place">{item.place}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
