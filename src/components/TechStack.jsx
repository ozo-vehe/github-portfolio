// import { useState } from 'react'

function TechStack() {
  const technologies = [
    { name: "HTML", icon: "https://img.icons8.com/color/144/html-5--v1.png" },
    { name: "CSS", icon: "https://img.icons8.com/color/144/css3.png" },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/240/javascript--v1.png",
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/fluency/144/typescript--v2.png",
    },
    {
      name: "Vue",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png",
    },
    { name: "React", icon: "https://img.icons8.com/officel/160/react.png" },
  ];
  return (
    <main className="techstack">
      <h2>My Tech Stack</h2>
      <p>Tecknologies I have been working with recently</p>
      <section className="technologies">
        {technologies.map((tech) => (
          <div className="techIconContainer" key={tech.name}>
            <img src={tech.icon} alt={tech.name} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default TechStack;
