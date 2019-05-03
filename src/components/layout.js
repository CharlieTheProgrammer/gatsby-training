/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"
import 'bootstrap/dist/css/bootstrap.css';

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
            <a href="https://twitter.com"><i className="fab mx-2 fa-twitter-square fa-2x social"></i></a>
            <a href="https://linkedin.com"><i className="fab mx-2 fa-linkedin fa-2x social"></i></a>
            <a href="mailto:dev@charlietheprogrammer.com"><i className="fa mx-2 fa-envelope-square fa-2x social"></i></a>
            <a href="https://github.com"><i className="fab mx-2 fa-github-square fa-2x social"></i></a>
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
