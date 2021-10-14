import React, { useState } from "react"
import InteractiveCode, {
  isStringNumber,
} from "../../src/components/InteractiveCode"
import CodeBlock from "../../src/components/codeBlock"
import InteractiveHeading from "./interactiveHeading"

export function truncateFloat(number: number) {
  return Number.isInteger(number) ? Number(number) : Number(number.toFixed(2))
}
export function isNumber(value: unknown) {
  return typeof value === "number" && isFinite(value)
}

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
        {`/* edit the numbers above and resize the window */\nfont-size: ${cssValue}`}
      </CodeBlock>
    </section>
  )
}
