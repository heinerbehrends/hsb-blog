import React, { LegacyRef, useEffect, useRef, useState } from "react"
import { gridBoxes, gridSection } from "../../src/styles.css"

function useElementWidth() {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  function handleResize() {
    if (ref.current?.offsetWidth !== undefined) {
      setWidth(ref.current.offsetWidth)
    }
  }
  useEffect(handleResize)
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
  return [ref, width]
}

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
