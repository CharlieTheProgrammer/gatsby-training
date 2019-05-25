import React, { Component } from 'react'
import Layout from '../components/layout'

export default class resume extends Component {
  render() {
    return (
        <Layout>
            <div className="border border-primary">
                <button className="btn btn-primary mx-auto d-block">Download Resume</button>
            </div>
        </Layout>
    )
  }
}
