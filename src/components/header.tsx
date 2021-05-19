import { Link } from "gatsby"
import React from "react"

export default function Header({ siteTitle }: { siteTitle: string }) {
  return (
    <header
      style={{
        display: "grid",
        alignItems: "center",
        height: "66vh",
        width: "calc(100vw - 8px)",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        marginTop: "-48px",
        backgroundImage: "url(/quasicrystals-color-reversed.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1
        className="main-heading"
        style={{
          gridArea: "1/1",
          textAlign: "center",
          fontSize: "4.5rem",
          zIndex: 1,
        }}
      >
        <Link to="/">{siteTitle}</Link>
      </h1>
    </header>
  )
}
