import React, { LegacyRef } from "react"
import useElementWidth from "./useElementWidth"
import { gridBoxes, gridSection } from "../../src/styles.css"

export type CSSProps = {
  gridStyle: React.CSSProperties
}
type InteractiveGridProps = CSSProps & {
  nrOfItems?: string
}

export default function InteractiveGrid({
  gridStyle,
  nrOfItems = "3",
}: InteractiveGridProps) {
  const [gridBox, width] = useElementWidth()
  return (
    <section
      style={{ overflowX: "auto", ...gridStyle }}
      className={gridSection}
    >
      {[...Array(Number(nrOfItems)).keys()].map(number => {
        if (number === 0) {
          return (
            <div
              key={number}
              ref={gridBox as LegacyRef<HTMLDivElement>}
              className={gridBoxes}
            >
              {width}
            </div>
          )
        }
        return (
          <div key={number} className={gridBoxes}>
            {width}
          </div>
        )
      })}
    </section>
  )
}
