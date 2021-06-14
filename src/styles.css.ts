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

export const globalHeader = composeStyles(
  atoms({
    fontSize: "large",
    paddingTop: "l",
    paddingRight: "xxl",
    fontWeight: "black",
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

export const bio = atoms({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
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
    padding: {
      mobile: "l",
      tablet: "xxl",
    },
  }),
  style({
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
