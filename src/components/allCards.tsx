import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { CardsQuery } from "../../graphql-types"
import { cardSection } from "../styles.css"
import Card from "./card"

export default function AllCards() {
  const data: CardsQuery = useStaticQuery(graphql`
    query Cards {
      allMdx(filter: { fileAbsolutePath: { regex: "/portfolio/" } }) {
        nodes {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            description
            title
            alt
            url
            github
          }
          slug
        }
      }
    }
  `)
  const portfolioItems = data.allMdx.nodes
  return (
    <section className={cardSection}>
      {portfolioItems.map(({ frontmatter, slug }, idx) => (
        <Card
          title={frontmatter?.title!}
          text={frontmatter?.description!}
          image={frontmatter?.image?.childImageSharp?.gatsbyImageData}
          alt={frontmatter?.alt!}
          slug={slug!}
          key={idx}
          url={frontmatter?.url!}
          github={frontmatter?.github!}
        />
      ))}
    </section>
  )
}
