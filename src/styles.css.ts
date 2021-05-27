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

export const globalHeader = atoms({
  fontSize: "large",
  paddingTop: "l",
  paddingRight: "xxl",
  fontWeight: "black",
})

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
  justifyContent: "space-between",
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
