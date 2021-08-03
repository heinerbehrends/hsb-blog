import React, { useState } from "react"
import { onChange } from "./ClampFnGenerator"
import CodeBlock from "../../src/components/codeBlock"
import InteractiveCode from "../../src/components/InteractiveCode"
import InteractiveHeading from "./interactiveHeading"

export function truncateFloat(number: number) {
  return Number.isInteger(number) ? Number(number) : Number(number.toFixed(2))
}
export function isNumber(value: unknown) {
  return typeof value === "number" && isFinite(value)
}

export default function VwFontSize() {
  const [viewport, setViewport] = useState("768")
  const [fontSize, setFontSize] = useState("28.8")

  const vwValue = truncateFloat(Number(fontSize) / (Number(viewport) / 100))
  const cssValue = `${isNumber(vwValue) ? vwValue : ""}vw`

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <InteractiveCode value={viewport} onChangeFn={onChange(setViewport)}>
        With a viewport width of{" "}
      </InteractiveCode>
      <InteractiveCode value={fontSize} onChangeFn={onChange(setFontSize)}>
        the font size should be{" "}
      </InteractiveCode>
      <InteractiveHeading cssValue={cssValue} />
      <CodeBlock className="language-css">
        {`/* edit the numbers above and resize the window */
font-size: ${cssValue}`}
      </CodeBlock>
    </section>
  )
}
