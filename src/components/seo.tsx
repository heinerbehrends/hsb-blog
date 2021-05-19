import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { MetaQuery } from "../../graphql-types"

type MetaArray = React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>[]

type SeoProps = {
  description?: string
  lang?: string
  title?: string
  meta?: MetaArray
}

const Seo = ({
  description = ``,
  lang = `en`,
  meta = [],
  title = "Title",
}: SeoProps) => {
  const data: MetaQuery = useStaticQuery(
    graphql`
      query Meta {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description ?? data.site?.siteMetadata?.description
  const defaultTitle = data.site?.siteMetadata?.title
  const metaFromQuery: MetaArray = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: data.site?.siteMetadata?.social?.twitter ?? ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={metaFromQuery.concat(meta)}
    />
  )
}

export default Seo
