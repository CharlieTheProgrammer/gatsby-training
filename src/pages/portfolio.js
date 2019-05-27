import React from 'react'
import Layout from '../components/layout'
// import { Link } from 'gatsby'
import TaskTrackerImage from '../components/image-tasktrackr-home-page'
import CreditScaleImage from '../components/image-creditscale-home-page'
import SelfSiteImage from '../components/image-self-site-home-page'

const Portfolio = () => {
    return (
        <Layout>
            <h1>Portfolio</h1>
            <section className="mb-5">
                <h2 className="mt-4">CreditScale</h2>
                <div className="row">
                    <div className="col-sm  mb-4 mb-sm-0">
                        <a href="https://creditscale.io/" target="_blank" rel="noopener noreferrer" ><CreditScaleImage></CreditScaleImage></a>
                    </div>
                    <div className="col-sm">
                        <p>Modernizes an existing single point XML API to a JSON REST API for credit report data. This is the first project I launched as an actual business product. It saves clients a ton of time because they don't have to deal with parsing XML and building their own infrastructure to supply this information.</p>


                        <p>Code available upon request except for the XML parsing components as this information is covered by a NDA with my previous employer.</p>

                        <p className="lead mb-0">Application Stack (Back End)</p>
                        <ul>
                            <li>SQL Server</li>
                            <li>NodeJs</li>
                            <li>ExpressJs</li>
                        </ul>

                        <p className="lead mb-0">Application Stack (Front End)</p>
                        <ul>
                            <li>Vanilla Js</li>
                            <li>Bootstrap 4</li>
                            <li>NodeJs</li>
                            <li>ExpressJs</li>
                        </ul>

                        <p><a className="d-none" href="/">Project Details</a></p>
                        <p><a href="https://documenter.getpostman.com/view/3379028/S17xr5ZJ" target="_blank" rel="noopener noreferrer">Postman API Docs</a></p>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="">TaskTrackr</h2>
                <div className="row">
                    <div className="col-sm mb-4 mb-sm-0">
                        <a href="https://tasktrackr.net/" target="_blank" rel="noopener noreferrer"><TaskTrackerImage></TaskTrackerImage></a>
                    </div>

                    <div className="col-sm">
                        <p>TaskTrackr is a simple application for keeping track of time spent on projects and tasks. It allows a user to create new projects, categories, and log entries for tasks.</p>

                        <p>I created this project because I was spending a lot of time learning about programming and I wanted to keep track of it all, while at the same time, build up my software developing skills.</p>

                        <p className="lead mb-0">Application Stack</p>
                        <ul>
                            <li>VueJs</li>
                            <li>SQLite</li>
                            <li>NodeJs</li>
                            <li>ExpressJs</li>
                        </ul>

                        <a className="d-none" href="/">Project Details</a>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <h2>This portfolio website!</h2>
                <div className="row">
                    <div className="col-sm mb-4 mb-sm-0">
                        <a href="/"><SelfSiteImage></SelfSiteImage></a>
                    </div>
                    <div className="col-sm">
                        <p>I built this website to gain experience with ReactJs. This website is built using Gatsby, which is a framework based on React.</p>

                        <p className="lead mb-0">Application Stack</p>
                        <ul>
                            <li>React Js</li>
                            <li>Bootstrap</li>
                            <li>Gatsby</li>
                            <li>Netlify</li>
                        </ul>

                        <a className="d-none" href="/">Project Details</a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Portfolio