import { Link } from "gatsby"
import React from "react"
import { Mdx, Maybe, MdxFields, MdxFrontmatter } from "../../graphql-types"

type Posts = (Pick<Mdx, "excerpt"> & {
  fields?: Maybe<Pick<MdxFields, "slug">> | undefined
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
  )
}
