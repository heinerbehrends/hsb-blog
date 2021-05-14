import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomeQuery } from "../../graphql-types"

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
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <header
        style={{
          display: "grid",
          alignItems: "center",
          height: "66vh",
          width: "calc(100vw - 8px)",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          marginTop: "-48px",
          backgroundImage: "url(/quasicrystals-color.svg)",
          backgroundClip: "text",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="main-heading"
          style={{
            gridArea: "1/1",
            textAlign: "center",
            fontSize: "4.5rem",
            zIndex: 1,
          }}
        >
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div
          style={{
            width: "calc(100vw - 8px)",
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            gridArea: "1/1",
          }}
        >
          {/* <QuasiHero /> */}
        </div>
      </header>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post?.frontmatter?.title || post?.fields?.slug

          return (
            <li key={post?.fields?.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields?.slug as string} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post?.frontmatter?.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post?.frontmatter?.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
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
