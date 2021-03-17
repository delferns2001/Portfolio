import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Form, FormControl, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./Navigation/TopNav";

import AboutMePage from "./Pages/AboutMe";
import HomePage from "./Pages/HomePage";
import ContactMePage from "./Pages/ContactMePage";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Container fluid className="h-100 p-0 d-flex flex-column">
          <TopNav />
          <Container fluid className="h-100">
            <Switch>
              <Route path="/about-me">
                <AboutMePage />
              </Route>
              <Route path="/contact-me">
                <ContactMePage />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Container>
        </Container>
      </Router>
    </>
  );
}

export default App;
