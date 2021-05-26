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
  marginTop: "l",
  fontWeight: "black",
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
    width: "50px",
    borderRadius: "100px",
  })
)
