import React from "react"
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer"
import theme from "../atomOneDark"

export const exampleCode = `
import React, { useState } from "react";

function Example() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={
        () => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim()

export default function CodeBlock({ code }: { code: string }) {
  return (
    <Highlight
      {...defaultProps}
      theme={theme as PrismTheme}
      code={code}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
