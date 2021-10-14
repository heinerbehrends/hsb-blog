import React, { useEffect } from "react"
import sdk from "@stackblitz/sdk"

type StackBlitzProps = {
  projectId: string
  view?: "preview" | "editor"
  height?: number | string
}

export default function StackBlitz({
  projectId,
  view,
  height,
}: StackBlitzProps) {
  useEffect(() => {
    sdk.embedProjectId("elementOrId", projectId, {
      theme: "dark",
      openFile: "index.tsx",
      view,
      height,
    })
  }, [])
  return <div id="elementOrId"></div>
}
