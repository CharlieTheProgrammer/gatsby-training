import PropTypes from "prop-types"
import React from "react"

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = ({ siteTitle, location }) => (
  <Navbar className="bg-light mb-2" collapseOnSelect expand="md">
    <Navbar.Brand href="/">Charlie Ontiveros</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/" active={location.pathname === '/'}>Home</Nav.Link>
        <Nav.Link href="/about" active={location.pathname === '/about'}>About</Nav.Link>
        <Nav.Link href="/portfolio" active={location.pathname === '/portfolio'}>Portfolio</Nav.Link>
        <Nav.Link href="/blog" active={location.pathname === '/blog'}>Blog</Nav.Link>
        <NavDropdown.Divider />
        <Nav.Link href="/resume" active={location.pathname === '/resume'}>Resume</Nav.Link>
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