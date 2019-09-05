import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

export default class Header extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://react-bootstrap.github.io/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Yazılımcı Bul '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Anasayfa</Nav.Link>
            <Nav.Link href="#link">Nedir</Nav.Link>
            <Nav.Link href="#link">Keşfet</Nav.Link>
            <Nav.Link href="#link">İletişim</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Üye Ol</Nav.Link>
            <Nav.Link href="#link">Giriş Yap</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}