import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Kan</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/boards">Quadros</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/logout">Sair</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;
