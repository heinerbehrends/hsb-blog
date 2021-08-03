import React, { useState } from "react"
import InteractiveCode, {
  isStringNumber,
} from "../../src/components/InteractiveCode"
import CodeBlock from "../../src/components/codeBlock"
import { isNumber, truncateFloat } from "./vwFontSizeGenerator"
import InteractiveHeading from "./interactiveHeading"

export function onChange(
  setInput: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => setInput(event.target.value)
}

export default function ClampFnFontSize() {
  const [viewport, setViewport] = useState("768")
  const [preferred, setPreferred] = useState("48")
  const [minimum, setMinumum] = useState("24")
  const [maximum, setMaximum] = useState("48")

  const vwValue = truncateFloat(Number(preferred) / (Number(viewport) / 100))

  // IDEE VOOR BLOG? CURRYING

  // function onChange1(event: React.ChangeEvent<HTMLInputElement>) {
  //   setInput1(event.target.value)
  // }
  // function onChange2(event: React.ChangeEvent<HTMLInputElement>) {
  //   setInput2(event.target.value)
  // }
  // function onChange3(event: React.ChangeEvent<HTMLInputElement>) {
  //   setInput3(event.target.value)
  // }
  // function onChange4(event: React.ChangeEvent<HTMLInputElement>) {
  //   setInput4(event.target.value)
  // }

  const cssValue = `clamp(${isStringNumber(minimum) ? minimum : ""}px, ${
    isNumber(vwValue) ? vwValue : ""
  }vw, ${isStringNumber(maximum) ? maximum : ""}px)`

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <InteractiveCode value={viewport} onChangeFn={onChange(setViewport)}>
        At a viewport width of{" "}
      </InteractiveCode>
      <InteractiveCode value={preferred} onChangeFn={onChange(setPreferred)}>
        the font size should be{" "}
      </InteractiveCode>
      <InteractiveCode value={minimum} onChangeFn={onChange(setMinumum)}>
        with a minimum font size of{" "}
      </InteractiveCode>
      <InteractiveCode value={maximum} onChangeFn={onChange(setMaximum)}>
        and a maximum font size of{" "}
      </InteractiveCode>
      <InteractiveHeading cssValue={cssValue} />
      <CodeBlock className="language-css">
        {`/* edit the numbers above and resize the window*/\nfont-size: ${cssValue}`}
      </CodeBlock>
    </section>
  )
}
