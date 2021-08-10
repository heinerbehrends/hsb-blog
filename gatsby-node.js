const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogTemplate = path.resolve(`./src/templates/blog-post.tsx`)

  // Get all markdown blog posts sorted by date
  const postsResult = await graphql(
    `
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/" } }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              keywords
              title
              description
            }
          }
        }
      }
    `
  )

  if (postsResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      postsResult.errors
    )
    return
  }

  const posts = postsResult.data.allMdx.nodes
  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `frontmatter${post.fields.slug}`,
        component: blogTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          url: `frontmatter${post.fields.slug}`,
        },
      })
    })
  }

  // repeat above for portfolio pages
  // Define a template for blog post
  const portfolioTemplate = path.resolve(`./src/templates/portfolio-item.tsx`)

  // Get all markdown blog posts sorted by date
  const portfolioResult = await graphql(
    `
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/portfolio/" } }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (portfolioResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      portfolioResult.errors
    )
    return
  }

  const portfolioItems = portfolioResult.data.allMdx.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (portfolioItems.length > 0) {
    portfolioItems.forEach((portfolioItem, index) => {
      const previousPortfolioItemId =
        index === 0 ? null : portfolioItems[index - 1].id
      const nextPortfolioItemId =
        index === portfolioItems.length - 1
          ? null
          : portfolioItems[index + 1].id

      createPage({
        path: portfolioItem.fields.slug,
        component: portfolioTemplate,
        context: {
          id: portfolioItem.id,
          previousPortfolioItemId,
          nextPortfolioItemId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
