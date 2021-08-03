import React from "react"
import { numberInput } from "../styles.css"
import { isNumber } from "../../content/fluid-typography/vwFontSizeGenerator"

export type InteractiveCodeProps = {
  children: string | string[]
  value: string
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void
  append?: string
}
export function isStringNumber(string: string) {
  return isNumber(Number(string)) && string !== ""
}
export default function InteractiveCode({
  children,
  onChangeFn,
  value,
  append = "pixel",
}: InteractiveCodeProps) {
  return (
    <label>
      <em>{children}</em>
      <input
        className={numberInput}
        size={2}
        type="text"
        value={value}
        onChange={onChangeFn}
      />
      <em> {append} </em>
      {isStringNumber(value) ? null : (
        <em style={{ color: "rgba(255, 0, 0, 0.5)" }}>
          {" "}
          - Please enter a number
        </em>
      )}
    </label>
  )
}
