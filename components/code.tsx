"use client"

import { Button } from "@/components/ui/button"
import { ClipboardCopy } from "lucide-react"

interface CodeProps {
  children: React.ReactNode
  className?: string
  showLineNumbers?: boolean
  showCopy?: boolean
}

export function Code({ children, className = "", showLineNumbers = false, showCopy = false }: CodeProps) {
  const lines = children?.toString().split("\n") || []

  const copyToClipboard = () => {
    if (typeof children === "string") {
      navigator.clipboard.writeText(children)
    }
  }

  return (
    <div className="relative group">
      <pre className={`bg-card border text-white p-4 rounded-lg font-mono text-sm overflow-x-auto ${className}`}>
        <code>
          {showLineNumbers ? (
            <div className="table w-full">
              {lines.map((line, i) => (
                <div key={i} className="table-row">
                  <span className="table-cell text-white pr-4 select-none text-right">{i + 1}</span>
                  <span className="table-cell">{line}</span>
                </div>
              ))}
            </div>
          ) : (
            children
          )}
        </code>
      </pre>
      {showCopy && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 transition-opacity"
          onClick={copyToClipboard}
        >
          <ClipboardCopy className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

