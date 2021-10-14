import React, { useState } from "react"
import InteractiveGrid from "./interactiveGrid"
import CodeBlock from "../../src/components/codeBlock"
import InteractiveCode, {
  isStringNumber,
} from "../../src/components/InteractiveCode"
import {
  isNumber,
  onChange,
  truncateFloat,
} from "../fluid-typography/ClampFnGenerator"
import { interactiveSection } from "../../src/styles.css"

export default function MinFnGapSize() {
  const [viewport, setViewport] = useState("768")
  const [maximum, setMaximum] = useState("16")

  const vwGapSeize = truncateFloat(Number(maximum) / (Number(viewport) / 100))
  const cssValue = `min(${isNumber(vwGapSeize) ? vwGapSeize : ""}vw, ${
    isStringNumber(maximum) ? maximum : ""
  }px)`
  const gridStyle = {
    gridGap: cssValue,
    gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
  }

  return (
    <section className={interactiveSection}>
      <InteractiveCode value={viewport} onChangeFn={onChange(setViewport)}>
        At the maximum layout width of{" "}
      </InteractiveCode>
      <br />
      <InteractiveCode value={maximum} onChangeFn={onChange(setMaximum)}>
        the gap size should be{" "}
      </InteractiveCode>

      <InteractiveGrid nrOfItems={"12"} gridStyle={gridStyle} />
      <CodeBlock className="language-css">
        {`/* edit the numbers above and resize the window */
gridGap: ${cssValue}`}
      </CodeBlock>
    </section>
  )
}
