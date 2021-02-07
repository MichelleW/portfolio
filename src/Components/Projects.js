import React from 'react'
import { projectListFrames } from '../Components/data/projectListFrames'
import './Projects.scss';

const Projects = () => {
  return (
    <div className="projects">

      <div className="container">
        <h1>Projects</h1>

        {
          projectListFrames.map((project, index) => {
            return <div className="card-container" key={index}>
              <h3>Project Name: {project.name}</h3>
              <h4>Technologies: {project.tech}</h4>
              <p>{project.des}</p>
              <i>{project.disclaimer}</i>
              <iframe src={project.proj} className="iframe"></iframe>
            </div>
          })
        }
 
      </div>
    </div>

  )
}

export default Projects
