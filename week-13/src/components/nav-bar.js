import React from "react";
import * as ReactBootStrap from "react-bootstrap";

export default class NavBar extends React.Component {
    render() {
        return(
            <ReactBootStrap.Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand id="title" href="#home">Week-13 Sleek Professional Website</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#features">About</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#pricing">Contact Us</ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown title="Website Theme" id="collasible-nav-dropdown">
                  <ReactBootStrap.NavDropdown.Item href="#action/3.1">Cool Color 1</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.2">Cool Color 2</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.3">Another Very Cool Theme</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="#deets">Testimonials</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link eventKey={2} href="#memes">

                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
        );
    }
}