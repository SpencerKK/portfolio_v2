import React from "react";
import "./Skills.css";

const skillsArr = [
  {
    name: "React / Redux",
    icon: "fab fa-react react-skills",
    focus: "Primary",
    key: 1
  },
  {
    name: "JavaScript",
    icon: "fab fa-js js-skills",
    focus: "Primary",
    key: 2
  },
  {
    name: "HTML",
    icon: "fab fa-html5",
    focus: "Primary",
    key: 3
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt css-skills",
    focus: "Primary",
    key: 4
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js node-skills",
    focus: "Secondary",
    key: 5
  },
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      {skillsArr.map((skill) => (
        <div className="skill-card" key={skill.key}>
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
