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
  onChangeCallback: React.Dispatch<React.SetStateAction<string>>
}

export default function InteractiveSelect({
  options,
  children,
  value,
  onChangeCallback: onChangeFn,
}: InteractiveSelectProps) {
  return (
    <label>
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
      <em>{children}</em>
    </label>
  )
}
