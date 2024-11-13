import React from 'react';
import './App.css'
import  Header from './Componet/Header.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'
import Profile from './Pages/Profile.jsx'
import Project from './Pages/HeroProject.jsx';
import Skills from './Pages/Skills.jsx'

function App() {

  return (
    
    <div className='app'>
    <Header />
   <Home/>
   <About />
   <Profile />
   <Project/>
   <Skills />
   <Contact/>
  
  
   </div>
      
  );

}
export default App
