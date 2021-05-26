import { Link } from "gatsby"
import React from "react"
import { titleHeading } from "../styles.css"

type HeaderProps = { siteTitle: string }

export default function Header({ siteTitle }: HeaderProps) {
  return (
    <header
      style={{
        display: "grid",
        alignItems: "center",
        height: "60vh",
        backgroundImage: "url(/quasicrystals-color-reversed.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className={titleHeading}>{siteTitle}</h1>
    </header>
  )
}
