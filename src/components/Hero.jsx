import React from 'react';
import Reactdom from "react-dom/client"
// import { useState } from 'react';
import '../styles/Hero.css';
// import Resume from "/resume.pdf"



export default function Hero(){
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className='imagebox'>
          <img src="/profileimage.jpg" alt="Image" className='image'/>
        </div>
        <h3>Hello, I'm</h3>
        <h1>SIVAPANDI R</h1>
        <h2>JUNIOR SOFTWARE DEVELOPER</h2>
        <p>I create modern, responsive and attractive websites using React.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="/resume.pdf" className="btn outline" >Download Resume</a>
        </div>
      </div>
    </section>
  );
}
