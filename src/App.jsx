import React from "react";
import ReactDom from "react-dom/client"
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Internship from "./components/Internship.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App(){
  return(
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Education/>
      <Internship/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App;