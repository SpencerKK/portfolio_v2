import React from "react";
import "./Projects.css";

// images
import notesImage from "../../img/take-note-screenshot.png";
import moviesImage from "../../img/spencer-movies-screenshot.png";
import rtlImage from "../../img/rtl-screencap-laptop.png";

const projectsArray = [
  {
    name: "Take Note",
    detail:
      "Take Note is my most robust project yet. It is a fullstack Evernote clone where users can sign-up, create notes & save them into notebooks. React / Redux in the frontend. MongoDB, Express, Node & Mongoose in the back. Integrating the draft.js rich text editor was certainly a challenge, but in total, the project taught me a great deal, and was a very rewarding experience",
    src: notesImage,
    alt: "Notes Application Screenshot",
    key: 1,
    ghLink: "https://github.com/SpencerKK/take-note",
    liveLink: "https://glacial-badlands-60032.herokuapp.com/",
  },
  {
    name: "Spencer Movies",
    detail:
      "Spencer Movies is a site to browse & search for movies and TV shows. Users can then select a movie or show, get its cast members and see similar titles. The site fetches data from MovieDB before being displayed to users.",
    src: moviesImage,
    alt: "Movies Browsing Site Screenshot",
    key: 2,
    ghLink: "https://github.com/SpencerKK/spencermovies",
    liveLink: "https://spencerkk.github.io/spencermovies/#/",
  },
  {
    name: "Ready to Launch",
    detail:
      "Ready to Launch was a site for Zoe Kenealy, whose 'Ready to Launch' podcast features varied and inspiring people from all walks of life to get their ideas on life, success & well-being. No frameworks here. Just HTML, CSS & JS.",
    src: rtlImage,
    alt: "Ready to Launch Website Screenshot",
    key: 3,
    ghLink: "https://github.com/SpencerKK/Ready-to-Launch",
    liveLink: "https://www.readytolaunchpodcasts.com/",
  },
];

const Projects = () => {
  return (
    <div className="projects-wrapper">
      {projectsArray.map((project) => (
        <div className="project-background" key={project.key}>
          <div className="project-section">
            <div className="project-text">
              <h1>{project.name}</h1>
              <p>{project.detail}</p>
              <div className="btn-wrapper">
                <a href={project.liveLink}>
                  <button>Live</button>
                </a>
                <a href={project.ghLink}>
                  <button>Code</button>
                </a>
              </div>
            </div>
            <img alt={project.alt} src={project.src} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
