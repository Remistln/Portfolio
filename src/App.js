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

export default function App() {
  return (
    <>
      <Router>
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollbar>
      </Router>
    </>
  );
}
