/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from "./header"
//import "./layout.css"
import 'bootstrap/dist/css/bootstrap.css';

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="d-none wrapper d-flex flex-column h-100">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="container mt-2" style={{
          flex: '1 0 auto'
        }}>{children}</main>
        <footer className="text-center bg-light pt-3">
          <div className="text-center py-1">
            <a href="https://twitter.com/WebDevCharlieO"><FontAwesomeIcon icon={faTwitterSquare} size="2x" className="mx-2" /></a>
            <a href="https://linkedin.com/in/charlie-ontiveros/"><FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" /></a>
            <a href="mailto:dev@charlietheprogrammer.com"><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" className="mx-2" /></a>
            <a href="https://github.com/CharlieTheProgrammer"><FontAwesomeIcon icon={faGithubSquare} size="2x" className="mx-2" /></a>
          </div>
          © {new Date().getFullYear()} Charlie The Programmer
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
