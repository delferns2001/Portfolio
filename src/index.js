import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import reportWebVitals from "./reportWebVitals";

import NavBar from "./Components/pages/Nav/NavBar";

import AboutMe from "./Components/pages/pages/AboutMe";
import Contact from "./Components/pages/pages/Contact";
import Home from "./Components/pages/pages/Home";
import Projects from "./Components/pages/pages/Projects";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container fluid className="h-100 d-flex flex-column main-container">
        <NavBar />
        <Container fluid className="h-100 d-flex flex-column main-container">
          <Switch>
            <Route path="/About-Me">
              <AboutMe />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
          </Switch>
        </Container>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
