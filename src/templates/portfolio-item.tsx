import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PortfolioLinks } from "../components/card"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PortfolioItemBySlugQuery } from "../../graphql-types"
import {
  date,
  hrStyles,
  portfolioImage,
  portfolioItemHeading,
} from "../styles.css"

type BlogPostTemplateProps = {
  data: PortfolioItemBySlugQuery
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
      <article>
        <header>
          <h1 className={portfolioItemHeading} itemProp="headline">
            {post?.frontmatter?.title}
          </h1>
          <p className={date}>{post?.frontmatter?.date}</p>
        </header>
        <a href={post?.frontmatter?.url!}>
          <GatsbyImage
            image={post?.frontmatter?.image?.childImageSharp?.gatsbyImageData!}
            alt={post?.frontmatter?.alt!}
            className={portfolioImage}
          />
        </a>
        <MDXRenderer>{post?.body ?? "There is no post body"}</MDXRenderer>
        <PortfolioLinks
          url={post?.frontmatter?.url!}
          github={post?.frontmatter?.github!}
        />
      </article>
      <hr className={hrStyles} />
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
        image {
          childImageSharp {
            gatsbyImageData(width: 720)
          }
        }
        alt
        url
        github
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
