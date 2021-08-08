import React, { useState } from "react"
import InteractiveGrid from "./interactiveGrid"
import { onChange } from "../fluid-typography/ClampFnGenerator"
import CodeBlock from "../../src/components/codeBlock"
import InteractiveCode from "../../src/components/InteractiveCode"

export default function fixedSizeColums() {
  const [size, setSize] = useState("200")
  const [nrOfItems, setNrOfItems] = useState("3")
  const [nrOfColumns, setNrOfColumns] = useState("3")
  const gridStyle = {
    gridTemplateColumns: `repeat(${nrOfColumns}, ${size}px)`,
  }
  return (
    <section>
      <InteractiveCode
        value={nrOfItems}
        onChangeFn={onChange(setNrOfItems)}
        append=","
      >
        The number of grid items should be{" "}
      </InteractiveCode>{" "}
      <br />
      <InteractiveCode
        value={nrOfColumns}
        onChangeFn={onChange(setNrOfColumns)}
        append=""
      >
        the number of columns should be{" "}
      </InteractiveCode>
      <br />
      <InteractiveCode value={size} onChangeFn={onChange(setSize)}>
        and the size of a grid item should be{" "}
      </InteractiveCode>
      <InteractiveGrid gridStyle={gridStyle} nrOfItems={nrOfItems} />
      <CodeBlock className={"language-css"}>
        {`/* edit the number above and resize the window */
display: grid;
grid-gap: 16px;
gridTemplateColumns: repeat(${nrOfColumns}, ${size}px);`}
      </CodeBlock>
    </section>
  )
}
