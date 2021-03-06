import React, { useState } from "react"
import { isNumber, onChange, truncateFloat } from "./ClampFnGenerator"
import CodeBlock from "../../src/components/codeBlock"
import InteractiveCode, {
  isStringNumber,
} from "../../src/components/InteractiveCode"
import InteractiveHeading from "./interactiveHeading"

export default function MinFnFontSize() {
  const [viewport, setViewport] = useState("768")
  const [preferred, setPreferred] = useState("48")
  const [maximum, setMaximum] = useState("48")

  const vwFontSeize = truncateFloat(
    Number(preferred) / (Number(viewport) / 100)
  )
  const cssValue = `min(${isNumber(vwFontSeize) ? vwFontSeize : ""}vw, ${
    isStringNumber(maximum) ? maximum : ""
  }px)`

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <InteractiveCode value={viewport} onChangeFn={onChange(setViewport)}>
        At a viewport width of{" "}
      </InteractiveCode>
      <InteractiveCode value={preferred} onChangeFn={onChange(setPreferred)}>
        the font size should be{" "}
      </InteractiveCode>
      <InteractiveCode value={maximum} onChangeFn={onChange(setMaximum)}>
        with a maximum of{" "}
      </InteractiveCode>
      <InteractiveHeading cssValue={cssValue} />
      <CodeBlock className="language-css">
        {`/* edit the numbers above and resize the window */
font-size: ${cssValue}`}
      </CodeBlock>
    </section>
  )
}
