import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <Navbar className="bg-light mb-2" collapseOnSelect expand="md">
    <Navbar.Brand href="/">Charlie Ontiveros</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <NavDropdown.Divider />
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
