import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BioQueryQuery } from "../../graphql-types"

function Bio() {
  const data: BioQueryQuery = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site?.siteMetadata?.author
  const social = data.site?.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>. <br />{" "}
          {author?.summary || null}
          <br />
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You can follow me on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
