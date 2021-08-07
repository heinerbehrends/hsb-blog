import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BioQueryQuery } from "../../graphql-types"
import { bio, bioImage } from "../styles.css"

function Bio({ children }: { children?: React.ReactNode }) {
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
            alt="Profile picture"
          />
        </div>

        <p>
          Written by <strong>{author?.name}</strong>.{" "}
        </p>
      </div>
      <p>
        {!!children ? children : author?.summary || null} Feel free to check out
        my <Link to="/">portfolio. </Link>
        You can
        <a href={`https://twitter.com/ ${social?.twitter || ``}`}>
          {" "}
          follow me on Twitter.
        </a>
      </p>
    </>
  )
}

export default Bio
