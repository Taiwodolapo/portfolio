import React from 'react';
import './Profile.css'
import picture from "../assets/Taiwo.jpg"
const Profile = () => {
    return(

    <div className='Nav5'>  
<div className='profile'>

      <div className='img'>
      <img src={picture} />
      </div>
      <h1> Ogunsina Taiwo Dolapo <span></span> </h1>
        <p>Bringing ideas to life with code! </p>
        <p className='quote'>
          Entry-level developer with a knack for creativity <br />
          and a strong foundation in coding principles. <br />
          Committed to continuous learning and improving <br />
          my skills in front-end development.
        </p>
        <button className="follow"><a href="https://x.com/Taiwo Ogunsina">Follow </a></button>
</div>
        <div className="profile-links">
        <span className="icons">🔗</span>
        <a href="link">links</a>
        <span className=""></span>
        <span>March 5th</span>
        <span className=""></span>
        <span>Joined Nov 2024</span>
      </div>
      <p className="text">Stay updated on my latest projects and adventures!</p>

      <form className="form">
        <input type="email" placeholder="Email Address" />
        <button type="submit">Subscribe!</button>
      </form>
      <p className="note">No spam. Unsubscribe any time.</p>

      </div>
    )
}
export default Profile