import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomeQuery } from "../../graphql-types"
import Header from "../components/header"
import AllCards from "../components/allCards"
import PostsPreview from "../components/postsPreview"
import { homeh2, hrStyles, linkStyles } from "../styles.css"

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
      <Header siteTitle={"hsbehrends"} />
      <Layout location={location} title={siteTitle}>
        <Seo title="Heiner S. Behrends - web developer" />
        <Bio>
          <em>hsbehrends.eu</em> is home to my portfolio and blog. Here I
          present personal projects focused on interactivity and{" "}
          <Link to="/blog">blog posts</Link> that document my learning progress.
        </Bio>
        <h2 className={homeh2}>Portfolio</h2>
        <AllCards />
        <hr className={hrStyles} />
        <Link to={"/frontmatter"} className={linkStyles}>
          <h2 className={homeh2}>Frontmatter Blog</h2>
        </Link>
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
