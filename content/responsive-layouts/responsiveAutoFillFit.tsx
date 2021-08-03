import React, { useState } from "react"
import CodeBlock from "../../src/components/codeBlock"
import InteractiveCode from "../../src/components/InteractiveCode"
import InteractiveGrid from "./interactiveGrid"
import InteractiveSelect from "./interactiveSelect"
import { numberInput } from "../../src/styles.css"
import { onChange } from "../fluid-typography/ClampFnGenerator"

export const stretchOptions = [
  {
    label: "not stretch",
    value: "auto-fill",
  },
  {
    label: "stretch",
    value: "auto-fit",
  },
]
export default function ResponsiveAutoFillFit() {
  const [nrOfItems, setNrOfItems] = useState("1")
  const [fitOrFill, setFitOrFill] = useState("auto-fill")

  const gridStyle = {
    gridTemplateColumns: `repeat(${fitOrFill}, minmax(100px, 1fr))`,
  }
  return (
    <section>
      <InteractiveCode
        value={nrOfItems}
        onChangeFn={onChange(setNrOfItems)}
        append=""
      >
        The number of grid items should be{" "}
      </InteractiveCode>{" "}
      <br />
      <em>and when there are not enough items to fill a row</em>
      <InteractiveSelect
        append=" to fill the space."
        value={fitOrFill}
        options={stretchOptions}
        onChangeFn={setFitOrFill}
      >
        the columns should{" "}
      </InteractiveSelect>
      <br />
      <InteractiveGrid gridStyle={gridStyle} nrOfItems={nrOfItems} />
      <CodeBlock className={"language-css"}>
        {`/* Change the values above */
display: grid;
grid-template-columns: repeat(${fitOrFill}, minmax(100px, 1fr));`}
      </CodeBlock>
    </section>
  )
}
