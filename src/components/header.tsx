import React from "react"
import { headerHome, titleHeading } from "../styles.css"

type HeaderProps = { siteTitle: string }

export default function Header({ siteTitle }: HeaderProps) {
  return (
    <header className={headerHome}>
      <h1 className={titleHeading}>
        <em>{siteTitle}</em>
      </h1>
    </header>
  )
}
