import React from 'react';
import './HeroProject.css'


const Project = () => {

  
    return(

      <div id='projects' className="projects-section" >
      <h1>My Portfolio</h1>
      <p>Some of my recent projects</p>
      
      <section className="projects-list" id="projects">

          <div  className="project-card">
            <h4>Country Card:</h4>
            <img src="" alt="" />
            <p>description</p>
            <a href="https://taiwodolapo.github.io/countrycard/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div  className="project-card">
            <h4>Dessert:</h4>
            <img src="" alt="" />
            <p>description</p>
            <a href="https://taiwodolapo.github.io/dessert/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div  className="project-card">
            <h4>title:</h4>
            <img src="" alt="" />
            <p>description</p>
            <a href="" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div  className="project-card">
            <h4>title:</h4>
            <img src="" alt="" />
            <p>description</p>
            <a href="" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

      </section>
      
    </div>
    );
};
export default Project