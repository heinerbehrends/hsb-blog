import * as React from "react"
import { Link } from "gatsby"
import { globalHeader } from "../styles.css"

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
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main>
        <header className={globalHeader}>{header}</header>
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with love by
          {` `}
          <a href="https://www.flyfi.nl">flyfi</a>
        </footer>
      </main>
    </div>
  )
}

export default Layout
