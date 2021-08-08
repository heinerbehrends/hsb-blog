import React, { useState } from "react"
import InteractiveGrid from "./interactiveGrid"
import CodeBlock from "../../src/components/codeBlock"
import InteractiveCode, {
  isStringNumber,
} from "../../src/components/InteractiveCode"
import { onChange } from "../fluid-typography/ClampFnGenerator"
import InteractiveSelect from "./interactiveSelect"
import { stretchOptions } from "./responsiveAutoFillFit"
import {
  truncateFloat,
  isNumber,
} from "../fluid-typography/vwFontSizeGenerator"

export default function AllTogether() {
  const [minimum, setMinimum] = useState("100")
  const [nrOfItems, setNrOfItems] = useState("12")
  const [fitOrFill, setFitOrFill] = useState("auto-fill")
  const [viewport, setViewport] = useState("768")
  const [maximum, setMaximum] = useState("16")
  const vwGapSeize = truncateFloat(Number(maximum) / (Number(viewport) / 100))
  const gridGapValue = `min(${isNumber(vwGapSeize) ? vwGapSeize : ""}vw, ${
    isStringNumber(maximum) ? maximum : ""
  }px)`
  const gridStyle = {
    gridGap: `${gridGapValue}`,
    gridTemplateColumns: `repeat(${fitOrFill}, minmax(${minimum}px, 1fr))`,
  }
  return (
    <section style={{ marginTop: "16px" }} id="tldr">
      <InteractiveCode
        value={nrOfItems}
        onChangeFn={onChange(setNrOfItems)}
        append="."
      >
        The number of grid items should be{" "}
      </InteractiveCode>
      <br />
      <InteractiveCode
        value={minimum}
        append="pixels."
        onChangeFn={onChange(setMinimum)}
      >
        The minimum size of a grid item should be{" "}
      </InteractiveCode>
      <br />
      <em>When there are not enough items to fill a row</em>
      <br />
      <em>the columns should </em>
      <InteractiveSelect
        options={stretchOptions}
        value={fitOrFill}
        onChangeCallback={setFitOrFill}
      >
        {" "}
        to fill the space
      </InteractiveSelect>
      <br />
      <InteractiveCode value={viewport} onChangeFn={onChange(setViewport)}>
        At the maximum layout width of{" "}
      </InteractiveCode>
      <br />
      <InteractiveCode
        value={maximum}
        onChangeFn={onChange(setMaximum)}
        append="pixel."
      >
        the gap size should be{" "}
      </InteractiveCode>

      <InteractiveGrid nrOfItems={nrOfItems} gridStyle={gridStyle} />
      <CodeBlock className={"language-css"}>
        {`/* edit the number above and resize the window */
display: grid;
grid-gap: ${gridGapValue};
grid-template-columns: repeat(${fitOrFill}, minmax(${minimum}px, 1fr));`}
      </CodeBlock>
    </section>
  )
}
