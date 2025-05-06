'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Copy } from 'lucide-react'

interface BoxShadowConfig {
  horizontalLength: number
  verticalLength: number
  blurRadius: number
  spreadRadius: number
  shadowColor: string
  shadowOpacity: number
  isInset: boolean
  boxColor: string
}

export default function BoxShadowGenerator() {
  const [config, setConfig] = useState<BoxShadowConfig>({
    horizontalLength: 0,
    verticalLength: 10,
    blurRadius: 39,
    spreadRadius: 10,
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.3,
    isInset: false,
    boxColor: '#121212'
  })

  const getBoxShadowStyle = () => {
    const rgba = `rgba(${hexToRgb(config.shadowColor)?.join(',')},${config.shadowOpacity})`
    return `${config.isInset ? 'inset ' : ''}${config.horizontalLength}px ${config.verticalLength}px ${config.blurRadius}px ${config.spreadRadius}px ${rgba}`
  }

  const getCSSCode = () => {
    const shadow = getBoxShadowStyle()
    return `-webkit-box-shadow: ${shadow};
-moz-box-shadow: ${shadow};
box-shadow: ${shadow};`
  }

  const getTailwindClass = () => {
    return `shadow-[${config.isInset ? 'inset_' : ''}${config.horizontalLength}px_${config.verticalLength}px_${config.blurRadius}px_${config.spreadRadius}px_rgba(${hexToRgb(config.shadowColor)?.join(',')},${config.shadowOpacity})] bg-[${config.boxColor}]`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const hexToRgb = (hex: string): number[] | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result 
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ]
      : null
  }

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between">
              <Label>Horizontal Length</Label>
              <span className="text-sm text-zinc-400">{config.horizontalLength}px</span>
            </div>
            <Slider
              min={-50}
              max={50}
              step={1}
              value={[config.horizontalLength]}
              onValueChange={([value]) => setConfig({ ...config, horizontalLength: value })}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label>Vertical Length</Label>
              <span className="text-sm text-zinc-400">{config.verticalLength}px</span>
            </div>
            <Slider
              min={-50}
              max={50}
              step={1}
              value={[config.verticalLength]}
              onValueChange={([value]) => setConfig({ ...config, verticalLength: value })}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label>Blur Radius</Label>
              <span className="text-sm text-zinc-400">{config.blurRadius}px</span>
            </div>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[config.blurRadius]}
              onValueChange={([value]) => setConfig({ ...config, blurRadius: value })}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label>Spread Radius</Label>
              <span className="text-sm text-zinc-400">{config.spreadRadius}px</span>
            </div>
            <Slider
              min={-50}
              max={50}
              step={1}
              value={[config.spreadRadius]}
              onValueChange={([value]) => setConfig({ ...config, spreadRadius: value })}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label>Shadow Opacity</Label>
              <span className="text-sm text-zinc-400">{config.shadowOpacity.toFixed(2)}</span>
            </div>
            <Slider
              min={0}
              max={1}
              step={0.01}
              value={[config.shadowOpacity]}
              onValueChange={([value]) => setConfig({ ...config, shadowOpacity: value })}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label>Outline</Label>
            <div className="flex items-center gap-2">
              <Switch
                checked={config.isInset}
                onCheckedChange={(checked) => setConfig({ ...config, isInset: checked })}
              />
              <span className="text-sm text-zinc-400">inset</span>
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <div className="space-y-4">
                <Label>Shadow Color</Label>
                <input
                type="color"
                value={config.shadowColor}
                onChange={(e) => setConfig({ ...config, shadowColor: e.target.value })}
                className="w-12 h-12 rounded-lg"
                />
            </div>

            <div className="space-y-4">
                <Label>Box Color</Label>
                <input
                    type="color"
                    value={config.boxColor}
                    onChange={(e) => setConfig({ ...config, boxColor: e.target.value })}
                    className="w-12 h-12 rounded-lg"
                />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="h-[370px] flex items-center justify-center bg-black rounded-lg">
            <div 
              className="w-64 h-64 rounded-lg"
              style={{ 
                backgroundColor: config.boxColor,
                boxShadow: getBoxShadowStyle(),
              }}
            />
          </div>

          {/* Output */}
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute right-2 top-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(getCSSCode())}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <pre className="p-4 rounded-lg overflow-x-auto border">
                <code className="text-sm">{getCSSCode()}</code>
              </pre>
            </div>

            <div className="relative">
              <div className="absolute right-2 top-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(getTailwindClass())}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <pre className="p-4 rounded-lg overflow-x-auto border">
                <code className="text-sm">{getTailwindClass()}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

