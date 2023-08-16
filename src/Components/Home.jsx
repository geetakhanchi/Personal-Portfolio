import React from "react";
import "../Style/Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "../Utils/About";
import Projects from "../Utils/Projects";
import Skills from "../Utils/Skills";
import GithubCalender from "../data/GithubCalender";
// import Work from "../Utils/Work";
import Contact from "../Utils/Contact";
import Softskill from "../Utils/Softskill";
import StaticSection from "../Utils/StaticSection";
const Home = () => {
  return (
    <>

      <div>
        <Navbar />
      </div>
      <div className="Home">

        <div>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          {/* <section id="work">
          <Work />
        </section> */}
        <section id="Softskill">
            <Softskill/>
          </section>
        <section id="Static_section">
            <StaticSection/>
          </section>
        
          <section id="GithubCalender">
            <GithubCalender />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
