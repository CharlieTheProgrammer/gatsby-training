import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout'

// We are going to pass in data that would be a blog post

const Template = ({ data }) => {
    // console.log(data)
    const post = data.markdownRemark

    return (
        <Layout>
            <div>
                <Link to="/blog">Go Back</Link>
                <hr />
                <h1>{post.frontmatter.title}</h1>
                <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`

export default Template