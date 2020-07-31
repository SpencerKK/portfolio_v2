import React from "react";
import "./Skills.css";

import {
  animateScroll as scroll,
} from "react-scroll";

const skillsArr = [
  {
    name: "React / Redux",
    icon: "fab fa-react react-skills",
    focus: "Primary",
    link: "https://reactjs.org/",
    key: 1,
  },
  {
    name: "JavaScript",
    icon: "fab fa-js js-skills",
    focus: "Primary",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    key: 2,
  },
  {
    name: "HTML",
    icon: "fab fa-html5",
    focus: "Primary",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    key: 3,
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt css-skills",
    focus: "Primary",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    key: 4,
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js node-skills",
    focus: "Secondary",
    link: "https://nodejs.org/en/",
    key: 5,
  },
];

const Skills = (props) => {

  return (
    <div className="skills-container">
      <div className="skills-wrapper">
        {skillsArr.map((skill) => (
          <div className="skill-card" key={skill.key}>
            <a href={skill.link}>
              <i className={skill.icon}></i>
            </a>
            <div className="skill-text">
              <p id="skill-name">{skill.name}</p>
              <p id="skill-focus">Focus: {skill.focus}</p>
            </div>
          </div>
        ))}
      </div>
      <i onClick={() => scroll.scrollTo(800)} className="fas fa-angle-double-down skills-down-caret"></i>
    </div>
  );
};

export default Skills;
