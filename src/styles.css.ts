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

export const postPreviewHeading = atoms({ marginTop: "none" })

export const postPreviewContainer = composeStyles(
  atoms({
    background: "background",
    paddingX: "l",
    paddingBottom: "xl",
    paddingY: "l",
    marginTop: "xl",
  }),
  style({
    transition: "transform 0.1s ease-in-out",
    ":hover": {
      transform: "scale(1.01)",
      boxShadow: "1px 1px 5px lightgray",
    },
  })
)

export const headerPost = composeStyles(
  atoms({ fontWeight: "black", fontSize: "xl", color: "text" }),
  style({
    display: "grid",
    alignItems: "center",
    height: "16.667vh",
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

export const homeh2 = atoms({
  fontSize: "xxl",
  textAlign: "center",
  fontStyle: "italic",
  marginTop: "xxl",
})

export const blogPostHeader = atoms({ marginTop: "xxl" })

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
    borderBottom: "1px solid #444",
    textAlign: "center",
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
  atoms({ marginTop: "l" }),
  style({
    display: "grid",
    gridGap: "16px",
  })
)

export const gridBoxes = composeStyles(
  atoms({ textAlign: "center", paddingY: "l", fontSize: "xl" }),
  style({ border: "1px solid" })
)

export const date = atoms({ marginTop: "xs", fontStyle: "italic" })

export const cardSection = composeStyles(
  atoms({
    marginTop: "xl",
    paddingBottom: "xl",
  }),
  style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gridGap: "min(2.22vw, 16px)",
  })
)

export const linkStyles = style({
  ":hover": {
    textDecoration: "none",
  },
})

export const cardContainer = composeStyles(
  atoms({
    background: "background",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }),
  style({
    transition: "transform 0.1s ease-in-out",
    ":hover": {
      transform: "scale(1.01)",
      boxShadow: "1px 1px 5px lightgray",
    },
  })
)

export const cardHeading = atoms({
  marginTop: "l",
  fontSize: "l",
  textAlign: "center",
})

export const cardP = atoms({
  marginTop: "none",
  paddingX: "l",
  paddingTop: "s",
  paddingBottom: "m",
})

export const cardLinks = atoms({
  display: "flex",
})

export const cardLinkItem = composeStyles(
  atoms({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "l",
  }),
  style({
    width: "50%",
    ":hover": {
      boxShadow: "1px 1px 5px lightgray",
    },
  })
)

export const cardIconText = atoms({ marginRight: "xs" })

export const portfolioItemHeading = atoms({
  textAlign: "center",
  marginTop: "xxl",
})

export const portfolioImage = atoms({
  marginTop: "m",
})

export const hrStyles = atoms({
  marginTop: "none",
})
