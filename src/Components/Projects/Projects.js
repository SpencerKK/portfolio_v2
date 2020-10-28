import React from "react";
import "./Projects.css";

// images
import notesImage from "../../img/take-note-screenshot.png";
import moviesImage from "../../img/spencer-movies-screenshot.png";
import tmancyImg from "../../img/tmancy-screencap-laptop.png";
import weatherImage from '../../img/weather-weekly-screenshot.png';

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
    name: "Technomancy Agency",
    detail:
      "Technomancy Agency specializes in Influener Marketing and creates unique experiences for brands and creators of all sizes. I used SASS to create a responsive design pattern throughout the site that feels light and bouncy while maintaining a sense of professionalism.",
    src: tmancyImg,
    alt: "Technomancy Agency Website Screenshot",
    key: 3,
    ghLink: "https://github.com/SpencerKK/technomancy-agency",
    liveLink: "https://www.technomancyagency.com/",
  },
  {
    name: "Weather-Weekly",
    detail:
      "Obligatory JavaScript weather app uses the OpenWeather API. I mainly just wanted to get away from React and use some vanilla JS, and I hadn't touched the API yet, so I went with it. It is rather simple, but I feel good about the clean, responsive design here.",
    src: weatherImage,
    alt: "Weather Application Screenshot",
    key: 3,
    ghLink: "https://github.com/SpencerKK/weather-weekly",
    liveLink: "https://weather-weekly.netlify.app/",
  }
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
