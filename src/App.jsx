import React from "react";
import Resume from "./pages/Resume";

function App() {
  const resumeData = {
    name: "John Doe",
    title: "Full Stack Developer",
    contact: {
      phone: "+1 234 567 8910",
      email: "johndoe@email.com",
      location: "San Francisco, CA, USA",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
    summary:
      "Experienced Full Stack Developer with expertise in building scalable web applications using modern technologies. Passionate about creating efficient, user-friendly solutions.",
    education: {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      year: "2016",
      location: "Stanford, CA, USA",
    },
    skills: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "TypeScript",
    ],
    experience: [
      {
        position: "Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "2018 - Present",
        responsibilities: [
          "Developed and maintained full-stack web applications.",
          "Collaborated with cross-functional teams to define and design product features.",
          "Enhanced application performance by 30% through code optimization.",
        ],
      },
      {
        position: "Junior Developer",
        company: "Innovative Startups LLC",
        duration: "2016 - 2018",
        responsibilities: [
          "Implemented responsive front-end designs using React.",
          "Assisted in the development of RESTful APIs.",
          "Participated in code reviews and team meetings to improve development practices.",
        ],
      },
    ],
  };

  return (
    <div>
      <Resume {...resumeData} />
    </div>
  );
}

export default App;
