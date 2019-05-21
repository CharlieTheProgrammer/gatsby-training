import React from 'react'
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout'

// This page is iterating over the blogs info and just displaying only a part of the information.
const BlogPage = ({ data }) => (
    <Layout>
        <div>
            <h1>Latest Posts</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <hr />
                    <h3>{post.node.frontmatter.title}</h3>
                    <p>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</p>
                    <small className="d-block">SEO Keywords: {post.node.frontmatter.seoKeywords}</small>
                    <br />
                    <Link to={post.node.frontmatter.path}>Read More</Link>
                    <br />
                    <br />
                </div>
            ))}
        </div>
    </Layout>
)

// Why no use async here? I think that part of the answer lies in the fact
// that this may not be using gatsby-node.
export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark (sort: {
            fields: [frontmatter___date],
            order: DESC
          }) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    path
                    date
                    author
                    seoKeywords
                  }
                }
              }
          }
    }
`

export default BlogPage