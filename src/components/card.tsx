import { Link } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import {
  cardHeading,
  cardContainer,
  cardLinks,
  cardP,
  cardLinkItem,
  cardIconText,
  linkStyles,
} from "../styles.css"
import Code from "../icons/code.svg"
import LinkIcon from "../icons/link.svg"

type CardProps = {
  slug: string
  image: IGatsbyImageData
  alt: string
  title: string
  text: string
  url: string
  github: string
}

export default function Card({
  slug,
  image,
  alt,
  title,
  text,
  url,
  github,
}: CardProps) {
  return (
    <div className={cardContainer}>
      <Link className={linkStyles} to={`/${slug}`}>
        <GatsbyImage image={image} alt={alt} />
        <h3 className={cardHeading}>{title}</h3>
        <p className={cardP}>{text}</p>
      </Link>
      <div className={cardLinks}>
        <a className={cardLinkItem} href={url}>
          <span className={cardIconText}>Link</span>
          <LinkIcon />
        </a>
        <a className={cardLinkItem} href={github}>
          <span className={cardIconText}>Code</span>
          <Code />
        </a>
      </div>
    </div>
  )
}
