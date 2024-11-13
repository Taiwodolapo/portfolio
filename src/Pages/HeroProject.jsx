import React from 'react';
import './HeroProject.css'
import picture1 from "../assets/desktop-design-home-light.jpg"
import picture2 from "../assets/image-waffle-desktop.jpg"
import picture3 from "../assets/Capture.png"
import picture4 from "../assets/image-hero-desktop.png"
const Project = () => {

  
    return(

      <div id='projects' className="projects-section" >
      <h1>My Project</h1>
      <p>Some of my recent projects</p>
      
      <section className="projects-list" id="projects">

          <div  className="project-card">
            <div className='img'>
      <img src={picture1} />
      </div>
      <h4>Country Card:</h4>
            <p>description</p>
            <a href="https://taiwodolapo.github.io/countrycard/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div  className="project-card">
            <div className='img'>
      <img src={picture2} />
      </div>
      <h4>Dessert:</h4>
            <p>description</p>
            <a href="https://taiwodolapo.github.io/dessert/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div  className="project-card">
            <div className='img'>
      <img src={picture3} />
      </div>
      <h4>Coolors:</h4>
            <p>description</p>
            <a href="https://taiwodolapo.github.io/coolors/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div  className="project-card">
            <div className='img'>
      <img src={picture4} />
      </div>
      <h4>Remote:</h4>
            <p>description</p>
            <a href="https://taiwodolapo.github.io/Remote/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

      </section>
      
    </div>
    );
};
export default Project