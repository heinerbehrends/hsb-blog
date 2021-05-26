import * as React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomeQuery } from "../../graphql-types"
import Header from "../components/header"
import PostsPreview from "../components/postsPreview"

type HomeProps = {
  data: HomeQuery
  location: Location
}

function Home({ data, location }: HomeProps) {
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
      <Header siteTitle={siteTitle} />
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <PostsPreview posts={posts} />
      </Layout>
    </>
  )
}

export default Home

export const pageQuery = graphql`
  query Home {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
