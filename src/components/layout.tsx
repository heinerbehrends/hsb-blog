import * as React from "react"
import { Link } from "gatsby"
import { footer, headerPost, main } from "../styles.css"
//@ts-ignore
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./codeBlock"

type LayoutProps = {
  location: Location
  title: string
  children: React.ReactNode
  link?: string
}

function Layout({ location, title, children, link = "/" }: LayoutProps) {
  //@ts-expect-error
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${rootPath}frontmatter`
  const isRootPath =
    location.pathname === rootPath || location.pathname === blogPath
  let header

  if (isRootPath) {
    header = null
  } else {
    header = (
      <Link to={link}>
        <header className={headerPost}>
          <em>{title}</em>
        </header>
      </Link>
    )
  }

  const components = {
    code: CodeBlock,
  }

  return (
    <MDXProvider components={components}>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        {header}
        <main className={main}>
          {children}
          <footer className={footer}>
            © {new Date().getFullYear()}, Built with love by
            {` `}
            <a href="https://www.flyfi.nl">flyfi</a>
            <br />
            Check out my <a href="/">portfolio</a> on the home page.
          </footer>
        </main>
      </div>
    </MDXProvider>
  )
}

export default Layout
