import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image,
          FormGroup, ControlLabel, FormControl, HelpBlock, Clearfix } from 'react-bootstrap'


export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchQuery : ""
    }
  }
  getValidationState() {
    const length = this.state.searchQuery.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
  }
  searchOnChange(e) {
    this.setState({ searchQuery: e.target.value })
  }
  render() {
    return (
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                <Image src="/img/logo.png" responsive circle />
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="/cards">Become a Host</NavItem>
            <NavItem eventKey={2} href="#">Help</NavItem>
            <NavItem eventKey={3} href="#">Sign up</NavItem>
            <NavItem eventKey={3} href="#">Login</NavItem>
          </Nav>

          {/*
            The following should activate only if App ISN'T on index.
            <Clearfix></Clearfix>
            <form>
            <FormGroup
            controlId="searchBox"
            validationState={this.getValidationState()}
            >
            <ControlLabel>Search for building by address.</ControlLabel>
            <FormControl
            type="text"
            value={this.state.searchQuery}
            onChange={this.searchOnChange}
            placeholder="Enter the address here."
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </form> */}
        </Navbar>
    )
  }
}
