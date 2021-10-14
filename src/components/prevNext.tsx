import { Link } from "gatsby"
import React from "react"
import { Maybe, MdxFields, MdxFrontmatter } from "../../graphql-types"
import { prevNextNav } from "../styles.css"

type PreviousNext =
  | Maybe<{
      fields?: Maybe<Pick<MdxFields, "slug">> | undefined
      frontmatter?: Maybe<Pick<MdxFrontmatter, "title">> | undefined
    }>
  | undefined

export default function PrevNext(previous: PreviousNext, next: PreviousNext) {
  return (
    <nav className={prevNextNav}>
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
          {previous?.fields?.slug && (
            <Link to={`/frontmatter${previous?.fields?.slug!}`} rel="prev">
              ← {previous?.frontmatter?.title}
            </Link>
          )}
        </li>
        <li>
          {next?.fields?.slug && (
            <Link to={`/frontmatter${next?.fields?.slug!}`} rel="next">
              {next?.frontmatter?.title} →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
