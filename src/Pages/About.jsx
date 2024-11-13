import React from 'react';
import './About.css'
const About = () => {


    return(

    <div id='about' className='Nav2'>

      <section className='about'>
      <h1>About Me</h1> 
      <p>
 My name is Ogunsina Taiwo Dolapo, I am a front-end developer based in Lagos, Nigeria.
I enjoy learning more on technology and designing. I love to learn new things, and software development is one of them. I'd love
to gain more insight and work together with other developers to acquire more knowledge.
 </p>
</section>
      
      <section className='work'>
      <h2>Work Experience</h2>
          <ul>
            <li>
              <h3>Software Developer Intern</h3>
              <span>Sail Innovation Lab</span>
              <span>2024 - Present</span>
            </li>
            <li>
              <h3>Marketing Executive</h3>
              <span>Sweet Sensation Confectionery</span>
              <span>2023 - 2024</span>
            </li>
            <li>
              <h3>Teacher</h3>
              <span>De-Grands Private School</span>
              <span>2022</span>
            </li>
            <li>
              <h3>Frontliner</h3>
              <span>Sweet Sensation Confectionery</span>
              <span>2015 - 2016</span>
            </li>
          </ul>  
      </section>

 <section className='education'>
  
 <h2>Education</h2>
          <ul>
            <li>
              <h3>Bsc in Political Science</h3>
              <span>Federal University Oye-Ekiti, Ekiti State</span>
              <span>2017 - 2021</span>
            </li>
          </ul>
 </section>

        </div>
    )
}
export default About