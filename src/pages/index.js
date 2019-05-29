import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Charlie Ontiveros`, `full stack application blog`]} />
    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
      <p className="d-none d-sm-block">Welcome to my site, I'm happy to see you here...</p>
      <h1 className="d-none d-sm-block display-4  text-center">I'm Charlie Ontiveros</h1>
      <h1 className="d-block d-sm-none d-none-lg d-none-xl h1 font-weight-light  text-center">I'm <br/> Charlie <br/> Ontiveros</h1>
      <p className="lead text-center font-weight-bold">I Solve Business Problems with Technical Solutions </p>
      <p className="d-none d-sm-block w-50">I'm a web application developer based in the Sacramento area, specializing in building high-quality NodeJs, Express, and SQL applications.</p>
      <p className="d-block d-sm-none d-none-lg d-none-xl w-75">I'm a web application developer based in the Sacramento area, specializing in building high-quality NodeJs, Express, and SQL applications.</p>
      <Link className="btn btn-outline-primary mb-4" to="/portfolio">Check Out My Projects</Link>
    </div>
  </Layout>
)

export default IndexPage
