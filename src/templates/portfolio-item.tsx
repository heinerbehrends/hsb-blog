import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { BlogPostBySlugQuery } from "../../graphql-types"
import { blogPostArticle, date } from "../styles.css"

type BlogPostTemplateProps = {
  data: BlogPostBySlugQuery
  location: Location
}

const PortfolioItemTemplate = ({ data, location }: BlogPostTemplateProps) => {
  const post = data.mdx
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout link="/" location={location} title={siteTitle}>
      <Seo
        title={post?.frontmatter?.title}
        description={post?.frontmatter?.description ?? post?.excerpt}
      />
      <article
        className={blogPostArticle}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post?.frontmatter?.title}</h1>
          <p className={date}>{post?.frontmatter?.date}</p>
        </header>
        <MDXRenderer>{post?.body ?? "There is no post body"}</MDXRenderer>
        <hr />
      </article>
      <footer>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous?.fields?.slug!} rel="prev">
                  ← {previous?.frontmatter?.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next?.fields?.slug!} rel="next">
                  {next?.frontmatter?.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </footer>
    </Layout>
  )
}

export default PortfolioItemTemplate

export const pageQuery = graphql`
  query PortfolioItemBySlug(
    $id: String!
    $previousPortfolioItemId: String
    $nextPortfolioItemId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPortfolioItemId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPortfolioItemId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
