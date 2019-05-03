import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Portfolio = () => {
    return(
        <Layout>
            <h1>This is the main portfolio page</h1>
            <Link className="d-block" to='/portfolio/tasktracker'>TaskTrackr</Link>
            <Link to='/portfolio/creditscale'>CreditScale</Link>
        </Layout>
    )
}

export default Portfolio