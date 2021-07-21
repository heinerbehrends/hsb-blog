import React from "react"
import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from "prism-react-renderer"
import theme from "../atomOneDark"

type CodeBlockProps = {
  children: string
  className: `language-${Language}`
}

function CodeBlock({ children, className }: CodeBlockProps) {
  // className is undefined on build time
  var language = "javascript"
  if (!!className) {
    language = className.replace(/language-/, "")
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language as Language}
      theme={theme as PrismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={{ borderRadius: "8px" }}>
          <pre
            className={className}
            style={{
              ...style,
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default CodeBlock
