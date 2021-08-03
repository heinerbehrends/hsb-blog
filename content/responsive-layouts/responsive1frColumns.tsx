import React, { useState } from "react"
import { onChange } from "../fluid-typography/ClampFnGenerator"
import InteractiveGrid from "./interactiveGrid"
import CodeBlock from "../../src/components/codeBlock"
import InteractiveCode from "../../src/components/InteractiveCode"

export default function Responsive1FrColumns() {
  const [nrOfItems, setNrOfItems] = useState("3")
  const [nrOfColumns, setNrOfColumns] = useState("3")
  const gridStyle = {
    gridTemplateColumns: `repeat(${nrOfColumns}, 1fr)`,
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
      <InteractiveCode
        value={nrOfColumns}
        onChangeFn={onChange(setNrOfColumns)}
        append="."
      >
        and the number of columns should be{" "}
      </InteractiveCode>
      <br />
      <br />
      <InteractiveGrid gridStyle={gridStyle} nrOfItems={nrOfItems} />
      <CodeBlock className={"language-css"}>
        {`/* edit the number above and resize the window */
display: grid;
grid-gap: 16px;
gridTemplateColumns: repeat(${nrOfColumns}, 1fr);`}
      </CodeBlock>
    </section>
  )
}
