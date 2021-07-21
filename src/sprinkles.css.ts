import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles"

const space = {
  none: 0,
  auto: "auto",
  xxs: "4px",
  xs: "8px",
  s: "12px",
  m: "16px",
  l: "24px",
  xl: "32px",
  xxl: "48px",
}
const fontSize = {
  s: "16px",
  body: "18px",
  l: "24px",
  xl: "32px",
  xxl: "48px",
  huge: "min(13vw, 64px)",
}

const lineHeight = {
  body: 1.6,
  headings: 1.125,
}

const responsiveStyles = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 641)" },
    desktop: { "@media": "screen and (min-width: 1008)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    lineHeight: lineHeight,
    fontSize: fontSize,
    textAlign: ["center", "inherit", "left", "right"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
})

const colors = {
  red: "#ff0c0c",
  yellow: "#fbd900",
  text: "#444",
  lightText: "#f8f8ff",
  background: "#f8f8ff",
  darkBackground: "#192734",
}

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
    background: colors,
    borderColor: colors,
  },
})

const weights = {
  thin: 200,
  medium: 300,
  body: 400,
  bold: 700,
  black: 900,
}

const lineHeights = {
  body: 1.5,
  heading: 1.125,
}
const typographyStyles = createAtomicStyles({
  properties: {
    fontWeight: weights,
    lineHeight: lineHeights,
  },
})

export const atoms = createAtomsFn(
  responsiveStyles,
  colorStyles,
  typographyStyles
)
export type Atoms = Parameters<typeof atoms>[0]
