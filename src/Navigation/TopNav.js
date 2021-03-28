import React, { useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <Navbar bg="primary" variant="dark" expand="md" className="shadow-sm links">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/Portfolio" className="nav-link">
            Home
          </Link>
          <Link to="/Portfolio/about-me" className="nav-link">
            About Me
          </Link>
          <Link to="/Portfolio/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/Portfolio/contact-me" className="nav-link">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
