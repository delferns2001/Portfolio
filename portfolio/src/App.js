import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about-me">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/project">Project</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact-me">Contact Me</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default App;
