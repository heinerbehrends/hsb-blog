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
  const language = className.replace(/language-/, "")

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language as Language}
      theme={theme as PrismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
