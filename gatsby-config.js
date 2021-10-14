module.exports = {
  siteMetadata: {
    title: `heinerbehrends.eu`,
    author: {
      name: `Heiner Behrends`,
      summary: `heinerbehrends.eu is home to my portfolio and blog. Here I present personal projects focused on interactivity and blog posts that document my learning progress. `,
    },
    description: `heinerbehrends.eu is home to my portfolio and blog. `,
    siteUrl: `https://heinerbehrends.eu/`,
    social: {
      twitter: `@hsbehrends`,
    },
  },
  plugins: [
    // `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-image`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-vanilla-extract`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `heinerbehrends.eu`,
        short_name: `heinerbehrends.eu`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ff420c`,
        display: `standalone`,
        icon: `src/images/quasicrystals-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/portfolio`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.tsx"),
        },
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  // custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
            {
              allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                  excerpt
                  frontmatter {
                    date
                    description
                    title
                  }
                  fields {
                    slug
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/quasicrystals-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
