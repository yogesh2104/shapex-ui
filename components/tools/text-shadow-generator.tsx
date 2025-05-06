'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Copy } from 'lucide-react'
import { Label } from '@/components/ui/label'

export default function TextShadowGenerator() {
  const [text, setText] = useState('ShapeXUI')
  const [horizontal, setHorizontal] = useState(-1)
  const [vertical, setVertical] = useState(-5)
  const [blur, setBlur] = useState(-5)
  const [opacity, setOpacity] = useState(0.82)
  const [shadowColor, setShadowColor] = useState('#ffffff')

  const generateTextShadow = () => {
    const rgba = `rgba(${hexToRgb(shadowColor)?.r}, ${hexToRgb(shadowColor)?.g}, ${
      hexToRgb(shadowColor)?.b
    }, ${opacity})`
    return `${horizontal}px ${vertical}px ${Math.abs(blur)}px ${rgba}`
  }

  const generateTailwindClass = () => {
    return `drop-shadow-[${horizontal}px_${vertical}px_${Math.abs(blur)}px_${rgbaToHex(
      hexToRgb(shadowColor)?.r || 0,
      hexToRgb(shadowColor)?.g || 0,
      hexToRgb(shadowColor)?.b || 0,
      opacity
    )}]`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="p-4 w-full">
      
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-[1fr,400px]">
        <div className="space-y-8">
          <div className="space-y-4">
            <Label>Text</Label>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border-zinc-800"
              placeholder="Enter your text"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Horizontal Length</Label>
              <Input 
                type="number" 
                value={horizontal} 
                onChange={(e) => setHorizontal(Number(e.target.value))}
                className="w-20  border-zinc-800"
              />
            </div>
            <Slider
              value={[horizontal]}
              onValueChange={([value]) => setHorizontal(value)}
              min={-100}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Vertical Length</Label>
              <Input 
                type="number" 
                value={vertical} 
                onChange={(e) => setVertical(Number(e.target.value))}
                className="w-20  border-zinc-800"
              />
            </div>
            <Slider
              value={[vertical]}
              onValueChange={([value]) => setVertical(value)}
              min={-100}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Blur Radius</Label>
              <Input 
                type="number" 
                value={blur} 
                onChange={(e) => setBlur(Number(e.target.value))}
                className="w-20  border-zinc-800"
              />
            </div>
            <Slider
              value={[blur]}
              onValueChange={([value]) => setBlur(value)}
              min={-100}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Opacity</Label>
              <Input 
                type="number" 
                value={opacity} 
                onChange={(e) => setOpacity(Number(e.target.value))}
                step={0.1}
                min={0}
                max={1}
                className="w-20  border-zinc-800"
              />
            </div>
            <Slider
              value={[opacity * 100]}
              onValueChange={([value]) => setOpacity(value / 100)}
              min={0}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Shadow Color</Label>
              <input
                type="color"
                value={shadowColor}
                onChange={(e) => setShadowColor(e.target.value)}
                className="h-10 w-20 bg-transparent rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="w-full aspect-square rounded-lg bg-zinc-900 flex items-center justify-center p-4">
            <h2 
              className="text-4xl font-bold"
              style={{
                textShadow: generateTextShadow()
              }}
            >
              {text}
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span>CSS</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => copyToClipboard(`text-shadow: ${generateTextShadow()};`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="text-sm">
                <code>{`text-shadow: ${generateTextShadow()};`}</code>
              </pre>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span>Tailwind CSS class</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => copyToClipboard(generateTailwindClass())}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="text-sm">
                <code>{generateTailwindClass()}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Utility functions
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

function rgbaToHex(r: number, g: number, b: number, a: number) {
  const alpha = Math.round(a * 255).toString(16).padStart(2, '0')
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('') + alpha
}

