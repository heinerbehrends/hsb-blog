import React, { useEffect, useRef, useState } from "react"
import { interactiveHeading } from "../../src/styles.css"

type InteractiveHeadingProps = {
  cssValue: string
}

export default function InteractiveHeading({
  cssValue,
}: InteractiveHeadingProps) {
  const ref = useRef(null)
  const [fontSize] = useElementFontSize(ref)
  return (
    <h3
      style={{
        fontSize: cssValue,
      }}
      ref={ref}
      className={interactiveHeading}
    >
      <em>This font size is {`${fontSize}`}</em>
    </h3>
  )
}

type useFSRef = {
  current: HTMLHeadingElement | null
}

function useElementFontSize(ref: useFSRef) {
  // const ref = useRef<HTMLHeadingElement>(null)
  const [fontSize, setFontSize] = useState("")
  function handleResize() {
    const fontSize = getComputedStyle(ref.current!).fontSize
    if (fontSize !== undefined) {
      setFontSize(fontSize)
    }
  }
  useEffect(handleResize)
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
  return [fontSize]
}
