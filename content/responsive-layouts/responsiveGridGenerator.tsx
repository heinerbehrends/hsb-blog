import React, { useState } from "react"
import InteractiveGrid from "./interactiveGrid"
import CodeBlock from "../../src/components/codeBlock"
import InteractiveCode from "../../src/components/InteractiveCode"
import { onChange } from "../fluid-typography/ClampFnGenerator"

export default function ResponsiveGridGenerator() {
  const [minimum, setMinimum] = useState("100")
  const [nrOfItems, setNrOfItems] = useState("6")
  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${minimum}px, 1fr))`,
  }
  return (
    <section id="tldr">
      <InteractiveCode
        value={nrOfItems}
        onChangeFn={onChange(setNrOfItems)}
        append=""
      >
        The number of grid items should be{" "}
      </InteractiveCode>

      <InteractiveCode value={minimum} onChangeFn={onChange(setMinimum)}>
        and the minimum size of a grid item should be{" "}
      </InteractiveCode>

      <InteractiveGrid nrOfItems={nrOfItems} gridStyle={gridStyle} />
      <CodeBlock className={"language-css"}>
        {`/* edit the number above and resize the window */
display: grid;
grid-gap: 16px;
grid-template-columns: repeat(auto-fill, minmax(${minimum}px, 1fr));`}
      </CodeBlock>
    </section>
  )
}
