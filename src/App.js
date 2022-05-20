import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SmoothScrollbar from './components/SmoothScrollbar';
import Bts from './pages/Bts';
import projects from './assets/data/projects';
import Project from './pages/Project';
import Stage from './pages/Stage';
import Certifications from './pages/Certifications';
import skills from "./assets/data/skills";
import Skill from "./pages/Skill";
import SimpleReactLightbox from 'simple-react-lightbox'

export default function App() {
  return (
    <>

      <Router>
        <SimpleReactLightbox>
        <NavMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            {projects.map((project) => (
              <Route path={project.link}>
                <Project
                  name={project.name}
                  photo1={project.imgun}
                  textun={project.textun}
                  photo2={project.imgdeux}
                  textdeux={project.textdeux}
                  photo3={project.imgtrois}
                  texttrois={project.texttrois}
                  competences={project.competences}
                />
              </Route>
            ))}
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/bts">
              <Bts />
            </Route>
            <Route path="/stage">
              <Stage />
            </Route>
            <Route path="/certifications">
              <Certifications />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            {skills.map((item) => (
                <Route path={item.link}>
                  <Skill
                      skill = {item}
                  />
                </Route>
            ))}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollbar>
        </SimpleReactLightbox>
      </Router>
    </>
  );
}
