import React, { Component } from 'react'
import Layout from "../components/layout"

export default class Presentations extends Component {
    render() {
        return (
            <Layout>
                <div className="">
                    <h1>Presentations</h1>
                    <hr></hr>
                    <h2>Multi-Page Apps vs Single Page Apps</h2>
                    <div className="mb-md-5 mx-md-5 mt-3" style={
                        {
                            position: 'relative',
                            paddingTop: '56.25%',
                        }
                    }>
                        <iframe
                            style={
                                {
                                    position:'absolute',
                                    top: 0,
                                    left: 0,
                                    width:"100%",
                                    height:"100%"
                                }
                            }
                        src="https://www.youtube.com/embed/-3SzkdNH_Hk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <section className="">
                        <h3>Description:</h3>
                        <p className="d-none d-sm-block w-50">In this presentation, I covered two different types of web applications, talked a little bit about their histories, and explained their pros and cons with examples.</p>
                        <p className="d-block d-sm-none d-none-lg d-none-xl">In this presentation, I covered two different types of web applications, talked a little bit about their histories, and explained their pros and cons with examples.</p>
                    </section>
                    <hr></hr>
                </div>
            </Layout>
        )
    }
}
