import React from 'react';
import projectsArray from '../constants/projects';

function Projects() {
  return (
    <div className="Gallery">
      {projectsArray.map((pic) => {
        return (
          <a
            className="Gallery-card"
            href="http://www.chelsea-avery.com/calculator/"
            target="_blank"
            rel="noopener noreferrer">
            <img alt="artwork" width="400px" height="400px" src={pic.path} />
          </a>
        );
      })}
    </div>
  );
}

export default Projects;
