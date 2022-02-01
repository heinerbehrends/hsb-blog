import React, { useState } from "react"
import { map, mapAccum } from "ramda"

export default function RandomWalk() {
  function moveRandomly(point: [number, number]) {
    const directions = {
      n: ([x, y]) => [x, y + 1],
      ne: ([x, y]) => [x + 1, y + 1],
      e: ([x, y]) => [x + 1, y],
      se: ([x, y]) => [x + 1, y - 1],
      s: ([x, y]) => [x, y - 1],
      sw: ([x, y]) => [x - 1, y - 1],
      w: ([x, y]) => [x - 1, y],
      nw: ([x, y]) => [x - 1, y + 1],
    }
    function getRandomProperty(obj) {
      const keys = Object.keys(obj)
      return obj[keys[Math.floor(Math.random() * keys.length)]]
    }
    return [
      getRandomProperty(directions)(point),
      getRandomProperty(directions)(point),
    ]
  }
  const movements = Array(3000).fill(null)
  const startingPoint = [25, 25]
  const [, randomWalk] = mapAccum(moveRandomly, startingPoint, movements)
  const pathD = randomWalk.reduce(
    (acc, point) => `${acc} L ${point[0]} ${point[1]}`,
    `M ${startingPoint[0]} ${startingPoint[1]}`
  )
  const [state, setState] = useState(0)
  return (
    <>
      <svg
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: "#eee" }}
      >
        <path d={pathD} fill="transparent" stroke="black" stroke-width="0.1" />
      </svg>
      <button onClick={() => setState(state + 1)}>Draw another</button>
    </>
  )
}
