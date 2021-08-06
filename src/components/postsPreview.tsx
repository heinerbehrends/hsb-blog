import { Link } from "gatsby"
import React from "react"
import { Mdx, Maybe, MdxFields, MdxFrontmatter } from "../../graphql-types"
import {
  linkStyles,
  postPreviewContainer,
  postPreviewHeading,
} from "../styles.css"

type Posts = (Pick<Mdx, "excerpt"> & {
  fields?: Maybe<Pick<MdxFields, "slug">>
  frontmatter?:
    | Maybe<Pick<MdxFrontmatter, "date" | "title" | "description">>
    | undefined
})[]

type PostPreviewProps = {
  posts: Posts
}

export default function PostsPreview({ posts }: PostPreviewProps) {
  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => {
        const title = post?.frontmatter?.title || post?.fields?.slug

        return (
          <li key={post?.fields?.slug}>
            <Link
              to={`/frontmatter${post.fields?.slug}` as string}
              className={linkStyles}
              itemProp="url"
            >
              <article
                className={postPreviewContainer}
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2 className={postPreviewHeading}>
                    <span itemProp="headline">{title}</span>
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
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
