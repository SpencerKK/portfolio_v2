import React from "react";
import "./Skills.css";

const skillsArr = [
  {
    name: "React / Redux",
    icon: "fab fa-react",
    focus: "Primary",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    focus: "Primary",
  },
  {
    name: "HTML",
    icon: "fab fa-html5",
    focus: "Primary",
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt",
    focus: "Primary",
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    focus: "Secondary",
  },
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      {skillsArr.map((skill) => (
        <div className="skill-card">
          <i className={skill.icon}></i>
          <div className="skill-text">
            <p id="skill-name">{skill.name}</p>
            <p id="skill-focus">Focus: {skill.focus}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
