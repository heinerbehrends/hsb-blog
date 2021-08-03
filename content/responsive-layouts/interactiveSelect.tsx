import React from "react"
import { numberInput } from "../../src/styles.css"
import { onChange } from "../fluid-typography/ClampFnGenerator"

export type InteractiveSelectProps = {
  options: {
    label: string
    value: string
  }[]
  children: string | string[]
  value: string
  onChangeFn: React.Dispatch<React.SetStateAction<string>>
  append?: string
}

export default function InteractiveSelect({
  options,
  children,
  append,
  value,
  onChangeFn,
}: InteractiveSelectProps) {
  return (
    <section>
      <em>{children}</em>
      <select
        className={numberInput}
        name="autoFillFit"
        id="autoFillFit"
        value={value}
        onChange={onChange(onChangeFn)}
      >
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
      <em>{append}</em>
    </section>
  )
}
