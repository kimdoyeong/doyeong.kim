/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const portfolioPost = path.resolve("./src/templates/portfolio.tsx")
  const blogPost = path.resolve("./src/templates/blog.tsx")
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: post.node.fields.slug.match(/^\/portfolio/)
        ? portfolioPost
        : blogPost,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}
exports.onCreateNode = async ({ node, actions, getNode, ...props }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const path = getNode(node.parent).sourceInstanceName

    const value = `/${path}${createFilePath({ node, getNode })}`
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
