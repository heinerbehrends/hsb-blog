import * as React from "react"
import { Link } from "gatsby"
import { footer, globalHeader, main } from "../styles.css"
//@ts-ignore
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./codeBlock"

type LayoutProps = {
  location: Location
  title: string
  children: React.ReactNode
}

function Layout({ location, title, children }: LayoutProps) {
  //@ts-expect-error
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = null
  } else {
    header = <Link to="/">{title}</Link>
  }

  const components = {
    code: CodeBlock,
  }

  return (
    <MDXProvider components={components}>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main className={main}>
          <header className={globalHeader}>{header}</header>
          {children}
          <footer className={footer}>
            © {new Date().getFullYear()}, Built with love by
            {` `}
            <a href="https://www.flyfi.nl">flyfi</a>
          </footer>
        </main>
      </div>
    </MDXProvider>
  )
}

export default Layout
