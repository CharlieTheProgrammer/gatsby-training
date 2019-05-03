import React from 'react'
import Layout from '../../components/layout'

const TaskTrackr = () => {
    return(
        <Layout>
            <h1>This is the portfolio page for Task Trackr.net</h1>
            <p>gatsby-source-filesystem takes into effect the relative path of a component. The reason why that doesn't work for md files is that aonther plugin takes over. That plugin uses the path in the md files to generate the folder structure.</p>
            <p>Therefore, it's important to understand how the plugins works. </p>
        </Layout>
    )
}

export default TaskTrackr