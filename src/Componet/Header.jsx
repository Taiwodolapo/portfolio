import React from 'react';
import './Header.css'; 


const Header = () => {
  return (
  <div className='Nav1'> 

  <div className='intro'>
   <h1><strong>My Portfolio</strong></h1> 
   <h2>Welcome to my page</h2>
  </div>
    
  <div className='head'>
    <button><a href="#home">Home</a></button>
    <button><a href="#about">About</a></button>
    <button><a href="#skills">Skills</a></button>
    <button><a href="#profile">Profile</a></button>
    <button><a href="#projects">Project</a></button>
    <button><a href="#contact">Contact</a></button>
    <button><a href="https://github.com/TaiwoDolapo">GitHub</a></button>
    <button><a href="https://x.com/Taiwo Ogunsina">Twitter</a></button>
    <a href=""></a>
  </div>

  


  </div>
  
  );
}

export default Header;
