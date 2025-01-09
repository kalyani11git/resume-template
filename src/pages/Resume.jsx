import React from "react";

const Resume = ({
  name,
  title,
  contact,
  summary,
  education,
  skills,
  experience,
}) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "32px",
        maxWidth: "800px",
        margin: "0 auto",
        border: "1px solid #D1D5DB",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          backgroundColor: "#3182CE",
          color: "white",
          padding: "24px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          alignItems: "center",
        }}
      >
        {/* Left Section: Profile Image */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid white",
            }}
          />
        </div>

        {/* Right Section: Name and Contact Details */}
        <div style={{ flex: "2", paddingLeft: "24px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: "0" }}>
            {name}
          </h1>
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "4px 0" }}>
            {title}
          </p>
          <div style={{ marginTop: "12px" }}>
            <p style={{ fontSize: "14px", margin: "4px 0" }}>
              {contact.phone} | {contact.email}
            </p>
            <p style={{ fontSize: "14px", margin: "4px 0" }}>
              {contact.location} |{" "}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "underline", color: "white" }}
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "underline", color: "white" }}
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#3182CE",
            borderBottom: "2px solid #63B3ED",
            paddingBottom: "4px",
          }}
        >
          Professional Summary
        </h2>
        <p style={{ marginTop: "8px", color: "#4A5568" }}>{summary}</p>
      </section>

      {/* Education */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#3182CE",
            borderBottom: "2px solid #63B3ED",
            paddingBottom: "4px",
          }}
        >
          Education
        </h2>
        <div style={{ marginTop: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#1A202C" }}>
            {education.degree}
          </h3>
          <p style={{ fontSize: "14px", color: "#4A5568" }}>
            {education.institution}
          </p>
          <p style={{ fontSize: "14px", color: "#A0AEC0" }}>
            {education.year} | {education.location}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#3182CE",
            borderBottom: "2px solid #63B3ED",
            paddingBottom: "4px",
          }}
        >
          Key Skills
        </h2>
        <ul
          style={{
            marginTop: "8px",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "8px",
            color: "#4A5568",
          }}
        >
          {skills.map((skill, index) => (
            <li
              key={index}
              style={{ listStyleType: "disc", marginLeft: "16px" }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#3182CE",
            borderBottom: "2px solid #63B3ED",
            paddingBottom: "4px",
          }}
        >
          Work Experience
        </h2>
        {experience.map((job, index) => (
          <div key={index} style={{ marginTop: "16px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1A202C",
              }}
            >
              {job.position}
            </h3>
            <p style={{ fontSize: "14px", color: "#4A5568" }}>
              {job.company} | {job.duration}
            </p>
            <ul style={{ marginTop: "8px", color: "#4A5568" }}>
              {job.responsibilities.map((task, i) => (
                <li
                  key={i}
                  style={{ listStyleType: "disc", marginLeft: "16px" }}
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;
