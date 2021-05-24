import { Button, Nav, Form, FormControl, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./TopNav";

import AboutMePage from "../Pages/AboutMe";
import HomePage from "../Pages/HomePage";
import ContactMePage from "../Pages/ContactMePage";
import Projects from "../Pages/Projects";

export default function PageSwitch() {
  return (
    <Router>
      <Container fluid className="h-100 p-0 d-flex flex-column">
        <TopNav />
        <Container fluid className="h-100">
          <Switch>
            <Route path="/Portfolio/about-me">
              <AboutMePage />
            </Route>
            <Route path="/Portfolio/contact-me">
              <ContactMePage />
            </Route>
            <Route path="/Portfolio/projects">
              <Projects />
            </Route>
            <Route path="/Portfolio">
              <HomePage />
            </Route>
          </Switch>
        </Container>
      </Container>
    </Router>
  );
}
