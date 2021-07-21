import React, { LegacyRef, useEffect, useRef, useState } from "react"
import { gridBoxes, gridSection } from "../styles.css"

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

export default function InteractiveGrid() {
  const [gridBox, width] = useElementWidth()
  return (
    <section className={gridSection}>
      <div ref={gridBox as LegacyRef<HTMLDivElement>} className={gridBoxes}>
        {width}
      </div>
      <div className={gridBoxes}>{width}</div>
      <div className={gridBoxes}>{width}</div>
    </section>
  )
}
