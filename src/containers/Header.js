import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'


export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">RateThisBuilding</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/cards">Cards</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2}  href="#">Login</NavItem>
          </Nav>
        </Navbar>
      </header>
    )
  }
}
