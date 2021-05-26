import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles"

const space = {
  none: 0,
  xs: "4px",
  s: "8px",
  m: "12px",
  l: "16px",
  xl: "24px",
  xxl: "32px",
}
const fontSize = {
  small: "16px",
  body: "20px",
  large: "24px",
  extraLarge: "48px",
  huge: "64px",
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
    fontSize: fontSize,
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
  body: 400,
  thin: 300,
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
