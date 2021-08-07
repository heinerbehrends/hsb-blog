import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { BlogPostBySlugQuery } from "../../graphql-types"
import { blogPostHeader, date } from "../styles.css"

type BlogPostTemplateProps = {
  data: BlogPostBySlugQuery
  location: Location
}

const BlogPostTemplate = ({ data, location }: BlogPostTemplateProps) => {
  const post = data.mdx
  const { previous, next } = data

  return (
    <Layout link="/frontmatter/" location={location} title={"frontmatter"}>
      <Seo
        title={post?.frontmatter?.title}
        description={post?.frontmatter?.description ?? post?.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 className={blogPostHeader} itemProp="headline">
            {post?.frontmatter?.title}
          </h1>
          <p className={date}>{post?.frontmatter?.date}</p>
        </header>
        <MDXRenderer>{post?.body ?? "There is no post body"}</MDXRenderer>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
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
              <Link to={`/frontmatter${previous?.fields?.slug!}`} rel="prev">
                ← {previous?.frontmatter?.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/frontmatter${next?.fields?.slug!}`} rel="next">
                {next?.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
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
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
