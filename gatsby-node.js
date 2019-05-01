
exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
    {
        allMarkdownRemark {
          edges {
            node {
              html
              id
              frontmatter {
                path
                title
                date
                author
              }
            }
          }
        }
      }
    `)
    console.log(results)

    results.data.allMarkdownRemark.edges.forEach(post => {
        const blog = post.node.frontmatter
        console.log("Post Information", post)
        createPage({
            path: `${blog.path}`,
            component: require.resolve('./src/templates/blog-post.js'),
        })
    })
}