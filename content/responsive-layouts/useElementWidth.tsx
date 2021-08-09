import { useRef, useState, useEffect } from "react"

export default function useElementWidth() {
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
