import * as React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { BlogQuery } from "../../graphql-types"
import Header from "../components/header"
import PostsPreview from "../components/postsPreview"

type BlogIndexProps = {
  data: BlogQuery
  location: Location
}

function BlogIndex({ data, location }: BlogIndexProps) {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  return (
    <>
      <Header siteTitle={"frontmatter"} />
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio>
          On the
          <b>
            <em> frontmatter </em>
          </b>
          blog I share my knowledge and document my learning progress. Feel free
          to check out my <Link to="/">portfolio. </Link>
        </Bio>
        <PostsPreview posts={posts} />
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query Blog {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/" } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
