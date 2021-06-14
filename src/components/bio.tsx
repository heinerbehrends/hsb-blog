import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BioQueryQuery } from "../../graphql-types"
import { bio, bioImage } from "../styles.css"

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
    <>
      <div className={bio}>
        <div className={bioImage}>
          <StaticImage
            style={{ borderRadius: "50px" }}
            imgStyle={{ borderRadius: "50px" }}
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.jpg"
            width={75}
            height={75}
            quality={95}
            alt="Profile picture"
          />
        </div>

        <p>
          Written by <strong>{author?.name}</strong>. <br />{" "}
        </p>
      </div>
      <p>
        {author?.summary || null}

        <a href={`https://twitter.com/ ${social?.twitter || ``}`}>
          {" "}
          You can follow me on Twitter
        </a>
      </p>
    </>
  )
}

export default Bio
