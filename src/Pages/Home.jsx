import React from 'react';
import picture from "../assets/Taiwo.jpg"
import './Home.css'
const Home = () => {
    return(

    <div className='Nav4'> 

<div className='img2'>
      <img src={picture} alt="image" />
      </div>
      
    
      <div className='page'>
      <h1>My Home Page</h1>
      <h2>Hi, I am <br /><span>Ogunsina Taiwo Dolapo</span></h2> <br />
      <p>I'm a frontend developer</p> <br />
      <p>I have knowledge in <span>HTML, CSS, JavaScript, React</span></p> <br />
      <p>I enjoy working with other developers, this helps me improve my skills as a developer.</p>
      </div>
      
        </div>
    )
}
export default Home