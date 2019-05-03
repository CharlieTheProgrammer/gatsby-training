import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
      <p className="d-none d-sm-block">Welcome to my site, I'm happy to see you here...</p>
      <h1 className="d-none d-sm-block display-4 text-uppercase text-center">I'm Charlie Ontiveros</h1>
      <h1 className="d-block d-sm-none d-none-lg d-none-xl h1 font-weight-light text-uppercase text-center">I'm <br/> Charlie <br/> Ontiveros</h1>
      <p className="lead text-center">I Solve Business Problems with Technical Solutions </p>
      <button className="btn btn-outline-primary">Download CV</button>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
