"use client"

import * as React from "react"
import { ThemeWrapper } from "@/components/theme-wrapper"
import "@/styles/mdx.css"
import { useConfig } from "@/hooks/useConfig"
import { BaseColor, baseColors } from "@/lib/base-color"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/default/ui/select"

export function Customizer() {
  const {config,updateConfig} = useConfig()

  return (
    <ThemeWrapper
      defaultTheme="minimalist"
      className="flex flex-col space-y-4 md:space-y-6"
    >
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5">
            <Select defaultValue={config.theme} onValueChange={(e: BaseColor["name"])=>updateConfig({
                ...config,
                theme:e,
                })}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Theme" />
                </SelectTrigger>
                <SelectContent>
                {baseColors.map((theme) => {
                    return (
                        <SelectItem value={theme.name} key={theme.name}>{theme.label}</SelectItem>
                    )
                })}
                </SelectContent>
            </Select>
        </div>
      </div>
    </ThemeWrapper>
  )
}

