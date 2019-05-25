import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo'

// We are going to pass in data that would be a blog post

const Template = ({ data }) => {
    // console.log(data)
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO
                keywords={post.frontmatter.seoKeywords.split(',')}
                title={post.frontmatter.title}
            ></SEO>
            <div className="mx-auto" style={{
                maxWidth: 700,
            }}>
                <Link to="/blog">Go Back</Link>
                < hr />
                <h1>{post.frontmatter.title}</h1>
                <p className="font-weight-light">Posted by {post.frontmatter.author} on {post.frontmatter.date}</p>
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
                seoKeywords
            }
        }
    }
`

export default Template