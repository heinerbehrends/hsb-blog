import { style, composeStyles } from "@vanilla-extract/css"
import { atoms } from "./sprinkles.css"

export const titleHeading = composeStyles(
  atoms({
    fontSize: "huge",
    fontWeight: "black",
    color: "text",
    margin: "none",
  }),
  style({
    textAlign: "center",
  })
)

export const headerHome = style({
  display: "grid",
  alignItems: "center",
  height: "60vh",
  backgroundImage: "url(/quasicrystals-color-reversed.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
})

export const headerPost = composeStyles(
  atoms({ fontWeight: "black", fontSize: "xl", color: "text" }),
  style({
    display: "grid",
    alignItems: "center",
    height: "12.5vh",
    backgroundImage: "url(/quasicrystals-color-reversed.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    textAlign: "center",
    ":hover": {
      textDecoration: "none",
    },
  })
)

export const blogPostArticle = atoms({
  paddingX: "m",
})

export const bio = atoms({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "xxl",
})

export const bioImage = composeStyles(
  atoms({
    paddingRight: "xl",
  }),
  style({
    width: "75px",
    borderRadius: "100%",
  })
)

export const main = composeStyles(
  atoms({
    lineHeight: "body",
    color: "text",
    fontSize: "body",
    marginX: "auto",
    marginY: "none",
  }),
  style({
    paddingLeft: "4vw",
    paddingRight: "4vw",
    maxWidth: "720px",
    fontFamily: "Fira Sans",
  })
)

export const footer = atoms({
  marginY: "xxl",
})

export const codeBlock = atoms({
  fontSize: "body",
})

export const numberInput = composeStyles(
  atoms({ color: "text" }),
  style({
    padding: "0",
    paddingTop: "4px",
    display: "inline",
    border: "none",
    textAlign: "center",
    borderBottom: "1px solid black",
    borderColor: "text",
    backgroundColor: "#FFFF66",
    ":focus": {
      outline: "none",
    },
  })
)

export const interactiveHeading = composeStyles(
  atoms({ marginTop: "l", paddingRight: "l", fontWeight: "thin" })
)

export const gridSection = composeStyles(
  style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridGap: "16px",
  })
)

export const gridBoxes = composeStyles(
  atoms({ textAlign: "center", paddingY: "l", fontSize: "xl" }),
  style({ border: "1px solid" })
)
