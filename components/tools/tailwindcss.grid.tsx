"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  Copy,
  Plus,
  Trash2,
  Eye,
  Code,
  Settings,
  Grid,
  X,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Undo,
  Redo,
  Layout,
  Save,
  Upload,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


// Types
type GridItem = {
  id: number
  colSpan: number
  rowSpan: number
  rowStart: number
  colStart: number
  bg: string
  text: string
  zIndex?: number
  rotation?: number
  shadow?: string
  borderRadius?: string
  opacity?: number
}

type GridConfig = {
  columns: number
  rows: number
  gap: number
  columnAuto: boolean
  rowAuto: boolean
  containerPadding: number
  containerBg: string
  itemBg: string
  responsive: boolean
  templateAreas: boolean
  minHeight: number
  borderRadius: number
}

type HistoryState = {
  gridConfig: GridConfig
  items: GridItem[]
}

export default function EnhancedGridGenerator() {
  // State for grid configuration
  const [gridConfig, setGridConfig] = useState<GridConfig>({
    columns: 3,
    rows: 2,
    gap: 4,
    columnAuto: false,
    rowAuto: false,
    containerPadding: 4,
    containerBg: "gray-100",
    itemBg: "white",
    responsive: true,
    templateAreas: false,
    minHeight: 300,
    borderRadius: 8,
  })

  // State for grid items
  const [items, setItems] = useState<GridItem[]>([
    {
      id: 1,
      colSpan: 1,
      rowSpan: 1,
      rowStart: 1,
      colStart: 1,
      bg: "blue-100",
      text: "Item 1",
      zIndex: 1,
      rotation: 0,
      shadow: "shadow",
      borderRadius: "rounded",
      opacity: 100,
    },
    {
      id: 2,
      colSpan: 2,
      rowSpan: 1,
      rowStart: 1,
      colStart: 2,
      bg: "green-100",
      text: "Item 2",
      zIndex: 1,
      rotation: 0,
      shadow: "shadow",
      borderRadius: "rounded",
      opacity: 100,
    },
    {
      id: 3,
      colSpan: 1,
      rowSpan: 1,
      rowStart: 2,
      colStart: 1,
      bg: "yellow-100",
      text: "Item 3",
      zIndex: 1,
      rotation: 0,
      shadow: "shadow",
      borderRadius: "rounded",
      opacity: 100,
    },
    {
      id: 4,
      colSpan: 1,
      rowSpan: 1,
      rowStart: 2,
      colStart: 2,
      bg: "red-100",
      text: "Item 4",
      zIndex: 1,
      rotation: 0,
      shadow: "shadow",
      borderRadius: "rounded",
      opacity: 100,
    },
    {
      id: 5,
      colSpan: 1,
      rowSpan: 1,
      rowStart: 2,
      colStart: 3,
      bg: "purple-100",
      text: "Item 5",
      zIndex: 1,
      rotation: 0,
      shadow: "shadow",
      borderRadius: "rounded",
      opacity: 100,
    },
  ])

  // Active tab state
  const [activeTab, setActiveTab] = useState("preview")

  // Selected item state
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null)

  // Fullscreen preview state
  const [isFullscreen, setIsFullscreen] = useState(false)

  // History for undo/redo
  const [history, setHistory] = useState<HistoryState[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isUndoRedo, setIsUndoRedo] = useState(false)

  // Templates
  const templates = [
    { name: "Basic Grid (3x2)", config: { ...gridConfig, columns: 3, rows: 2 } },
    { name: "Dashboard Layout", config: { ...gridConfig, columns: 4, rows: 3, gap: 6 } },
    { name: "Photo Gallery", config: { ...gridConfig, columns: 4, rows: 4, gap: 2, containerBg: "gray-900" } },
    { name: "Card Layout", config: { ...gridConfig, columns: 3, rows: 2, gap: 8, containerPadding: 8 } },
  ]

  // Color options for items with modern palette
  const colorOptions = [
    "blue-100",
    "green-100",
    "yellow-100",
    "red-100",
    "purple-100",
    "indigo-100",
    "pink-100",
    "orange-100",
    "teal-100",
    "gray-100",
    "blue-200",
    "green-200",
    "yellow-200",
    "red-200",
    "purple-200",
    "indigo-200",
    "pink-200",
    "orange-200",
    "teal-200",
    "gray-200",
  ]

  // Shadow options
  const shadowOptions = [
    { value: "shadow-none", label: "None" },
    { value: "shadow-sm", label: "Small" },
    { value: "shadow", label: "Medium" },
    { value: "shadow-md", label: "Large" },
    { value: "shadow-lg", label: "Extra Large" },
    { value: "shadow-xl", label: "XXL" },
  ]

  // Border radius options
  const borderRadiusOptions = [
    { value: "rounded-none", label: "None" },
    { value: "rounded-sm", label: "Small" },
    { value: "rounded", label: "Medium" },
    { value: "rounded-md", label: "Large" },
    { value: "rounded-lg", label: "Extra Large" },
    { value: "rounded-xl", label: "XXL" },
    { value: "rounded-full", label: "Full" },
  ]

  // Code ref for copying
  const codeRef = useRef<HTMLPreElement>(null)

  // Save current state to history when changes are made
  useEffect(() => {
    if (!isUndoRedo) {
      const newHistoryState = {
        gridConfig,
        items,
      }

      // Only add to history if there's a change
      if (historyIndex === -1 || JSON.stringify(history[historyIndex]) !== JSON.stringify(newHistoryState)) {
        // Remove any future history if we're not at the end
        const newHistory = history.slice(0, historyIndex + 1)
        setHistory([...newHistory, newHistoryState])
        setHistoryIndex(newHistory.length)
      }
    }
    setIsUndoRedo(false)
  }, [gridConfig, items])

  // Function to generate Tailwind CSS class strings for grid container
  const generateGridClasses = () => {
    const classes = ["grid"]

    if (gridConfig.columnAuto) {
      classes.push("grid-cols-none auto-cols-auto")
    } else {
      classes.push(`grid-cols-${gridConfig.columns}`)

      // Add responsive classes if enabled
      if (gridConfig.responsive) {
        if (gridConfig.columns > 3) {
          classes.push("md:grid-cols-" + gridConfig.columns)
          classes.push("grid-cols-2")
        } else if (gridConfig.columns > 1) {
          classes.push("sm:grid-cols-" + gridConfig.columns)
          classes.push("grid-cols-1")
        }
      }
    }

    if (gridConfig.rowAuto) {
      classes.push("grid-rows-none auto-rows-auto")
    } else {
      classes.push(`grid-rows-${gridConfig.rows}`)
    }

    classes.push(`gap-${gridConfig.gap}`)
    classes.push(`p-${gridConfig.containerPadding}`)
    classes.push(`bg-${gridConfig.containerBg}`)
    classes.push(`rounded-${gridConfig.borderRadius}`)

    return classes.join(" ")
  }

  // Generate HTML code
  const generateCode = () => {
    const gridClasses = generateGridClasses()

    const itemsHtml = items
      .map((item) => {
        const classes = [
          `bg-${item.bg}`,
          "p-4",
          item.borderRadius || "rounded",
          item.shadow || "shadow",
          "flex",
          "items-center",
          "justify-center",
          "font-medium",
          "transition-all",
          "duration-300",
        ]

        if (item.colSpan > 0) classes.push(`col-span-${item.colSpan}`)
        if (item.rowSpan > 0) classes.push(`row-span-${item.rowSpan}`)
        if (item.colStart > 0) classes.push(`col-start-${item.colStart}`)
        if (item.rowStart > 0) classes.push(`row-start-${item.rowStart}`)
        if (item.zIndex && item.zIndex > 1) classes.push(`z-${item.zIndex * 10}`)
        if (item.opacity && item.opacity < 100) classes.push(`opacity-${item.opacity}`)

        let style = ""
        if (item.rotation && item.rotation !== 0) {
          style = ` style="transform: rotate(${item.rotation}deg)"`
        }

        return `  <div className="${classes.join(" ")}"${style}>${item.text}</div>`
      })
      .join("\n")

    return `<div className="${gridClasses}" style="min-height: ${gridConfig.minHeight}px">\n${itemsHtml}\n</div>`
  }

  // Add a new grid item
  const addNewItem = () => {
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)]
    const newId = items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1

    const newItem = {
      id: newId,
      colSpan: 1,
      rowSpan: 1,
      colStart: 1,
      rowStart: 1,
      bg: randomColor,
      text: `Item ${newId}`,
      zIndex: 1,
      rotation: 0,
      shadow: "shadow",
      borderRadius: "rounded",
      opacity: 100,
    }

    setItems([...items, newItem])
    setSelectedItemId(newId)
    setActiveTab("items")
  }

  // Update an item property
  const updateItem = (id: number, field: string, value: any) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: field === "text" ? value : Number.parseInt(value) || 0 } : item,
      ),
    )
  }

  // Delete an item
  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
    if (selectedItemId === id) {
      setSelectedItemId(null)
    }
  }

  // Update item color
  const updateItemColor = (id: number, color: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, bg: color } : item)))
  }

  // Update item shadow
  const updateItemShadow = (id: number, shadow: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, shadow } : item)))
  }

  // Update item border radius
  const updateItemBorderRadius = (id: number, borderRadius: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, borderRadius } : item)))
  }

  // Update item opacity
  const updateItemOpacity = (id: number, opacity: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, opacity } : item)))
  }

  // Update item rotation
  const updateItemRotation = (id: number, rotation: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, rotation } : item)))
  }

  // Copy code to clipboard
  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.textContent || "")
      toast.success("Code copied!",{ 
        description: "The grid code has been copied to your clipboard.",
        duration: 2000
      })
    }
  }

  // Toggle fullscreen preview
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }


    // Apply template
    const applyTemplate = (template: any) => {
      setGridConfig(template.config)
      toast.success("Template applied",{
        description: `Applied the "${template.name}" template.`,
        duration: 2000,
      })
    }
  
    // Save configuration
    const saveConfiguration = () => {
      try {
        const config = {
          gridConfig,
          items,
        }
  
        const configString = JSON.stringify(config)
        localStorage.setItem("gridGeneratorConfig", configString)
  
        toast.success("Configuration saved",{
          description: "Your grid configuration has been saved to local storage.",
          duration: 2000,
        })
      } catch (error) {
        toast.error("Error saving configuration",{
          description: "There was an error saving your configuration.",
          duration: 3000,
        })
      }
    }
  
    // Load configuration
    const loadConfiguration = () => {
      try {
        const savedConfig = localStorage.getItem("gridGeneratorConfig")
  
        if (savedConfig) {
          const config = JSON.parse(savedConfig)
          setGridConfig(config.gridConfig)
          setItems(config.items)
  
          toast.success("Configuration loaded",{
            description: "Your saved grid configuration has been loaded.",
            duration: 2000,
          })
        } else {
          toast("No saved configuration",{
            description: "There is no saved configuration to load.",
            duration: 2000,
          })
        }
      } catch (error) {
        toast.error("Error loading configuration",{
          description: "There was an error loading your configuration.",
          duration: 3000,
        })
      }
    }
  
    // Export configuration
    const exportConfiguration = () => {
      try {
        const config = {
          gridConfig,
          items,
        }
  
        const configString = JSON.stringify(config, null, 2)
        const blob = new Blob([configString], { type: "application/json" })
        const url = URL.createObjectURL(blob)
  
        const a = document.createElement("a")
        a.href = url
        a.download = "grid-configuration.json"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
  
        toast("Configuration exported",{
          description: "Your grid configuration has been exported as JSON.",
          duration: 2000,
        })
      } catch (error) {
        toast.error("Error exporting configuration",{
          description: "There was an error exporting your configuration.",
          duration: 3000,
        })
      }
    }
  
    // Import configuration
    const importConfiguration = (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const file = event.target.files?.[0]
  
        if (file) {
          const reader = new FileReader()
  
          reader.onload = (e) => {
            try {
              const content = e.target?.result as string
              const config = JSON.parse(content)
  
              if (config.gridConfig && config.items) {
                setGridConfig(config.gridConfig)
                setItems(config.items)
  
                toast("Configuration imported",{
                  description: "Your grid configuration has been imported successfully.",
                  duration: 2000,
                })
              } else {
                throw new Error("Invalid configuration file")
              }
            } catch (error) {
              toast.error("Error parsing configuration",{
                description: "The selected file is not a valid grid configuration.",
                duration: 3000,
              })
            }
          }
  
          reader.readAsText(file)
        }
      } catch (error) {
        toast.error("Error importing configuration",{
          description: "There was an error importing your configuration.",
          duration: 3000,
        })
      }
  
      // Reset the input
      event.target.value = ""
    }
  
    // Undo
    const undo = () => {
      if (historyIndex > 0) {
        setIsUndoRedo(true)
        const newIndex = historyIndex - 1
        const previousState = history[newIndex]
  
        setGridConfig(previousState.gridConfig)
        setItems(previousState.items)
        setHistoryIndex(newIndex)
  
        toast.success("Undo",{
          description: "Previous action undone.",
          duration: 1000,
        })
      }
    }
  
    // Redo
    const redo = () => {
      if (historyIndex < history.length - 1) {
        setIsUndoRedo(true)
        const newIndex = historyIndex + 1
        const nextState = history[newIndex]
  
        setGridConfig(nextState.gridConfig)
        setItems(nextState.items)
        setHistoryIndex(newIndex)
  
        toast.success("Redo",{
          description: "Action redone.",
          duration: 1000,
        })
      }
    }

  // Get selected item
  const selectedItem = items.find((item) => item.id === selectedItemId)

  return (
    <div className="w-full mx-auto mb-12 px-4 md:px-8 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-end items-start md:items-center mb-6 gap-4">
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={undo} disabled={historyIndex <= 0}>
                  <Undo size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={redo} disabled={historyIndex >= history.length - 1}>
                  <Redo size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Redo</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Layout className="mr-2 h-4 w-4" />
                Templates
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {templates.map((template, index) => (
                <DropdownMenuItem key={index} onClick={() => applyTemplate(template)}>
                  {template.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                Save/Load
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={saveConfiguration}>
                <Save className="mr-2 h-4 w-4" /> Save to Browser
              </DropdownMenuItem>
              <DropdownMenuItem onClick={loadConfiguration}>
                <Upload className="mr-2 h-4 w-4" /> Load from Browser
              </DropdownMenuItem>
              <DropdownMenuItem onClick={exportConfiguration}>
                <Download className="mr-2 h-4 w-4" /> Export as JSON
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => document.getElementById("import-config")?.click()}>
                <Upload className="mr-2 h-4 w-4" /> Import from JSON
                <input
                  id="import-config"
                  type="file"
                  accept=".json"
                  className="hidden"
                  onChange={importConfiguration}
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-col h-[calc(100vh-200px)]">
        <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col h-[calc(82vh)]">
          <div className="flex-none">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <Eye size={16} /> Preview
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings size={16} /> Grid Settings
              </TabsTrigger>
              <TabsTrigger value="items" className="flex items-center gap-2">
                <Grid size={16} /> Items
              </TabsTrigger>
              <TabsTrigger value="code" className="flex items-center gap-2">
                <Code size={16} /> Code
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 overflow-hidden pb-10">
            <TabsContent value="preview" className="space-y-4 h-full overflow-auto">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Grid Preview</h2>
                <div className="flex gap-2">
                  <Button onClick={addNewItem} className="flex items-center gap-2">
                    <Plus size={16} /> Add Item
                  </Button>
                  <Button variant="outline" size="icon" onClick={toggleFullscreen}>
                    {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                  </Button>
                </div>
              </div>

              {/* Live Grid Preview */}
              <Card
                className={cn(
                  "transition-all duration-300",
                  isFullscreen ? "fixed inset-0 z-50 rounded-none overflow-auto" : "",
                )}
              >
                <CardContent className={cn("p-6", isFullscreen ? "min-h-screen" : "")}>
                  {isFullscreen && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-4 right-4 z-10"
                      onClick={toggleFullscreen}
                    >
                      <X size={16} />
                    </Button>
                  )}

                  <div className={generateGridClasses()} style={{ minHeight: `${gridConfig.minHeight}px` }}>
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className={cn(
                          `bg-${item.bg}`,
                          "p-4",
                          item.borderRadius || "rounded",
                          item.shadow || "shadow",
                          "flex",
                          "items-center",
                          "justify-center",
                          "font-medium",
                          "relative",
                          "transition-all",
                          "duration-300",
                          "cursor-pointer",
                          "hover:ring-2",
                          "hover:ring-offset-2",
                          "hover:ring-offset-transparent",
                          "hover:ring-blue-500",
                          item.colSpan > 0 ? `col-span-${item.colSpan}` : "",
                          item.rowSpan > 0 ? `row-span-${item.rowSpan}` : "",
                          item.colStart > 0 ? `col-start-${item.colStart}` : "",
                          item.rowStart > 0 ? `row-start-${item.rowStart}` : "",
                          item.zIndex && item.zIndex > 1 ? `z-${item.zIndex * 10}` : "",
                          item.opacity && item.opacity < 100 ? `opacity-${item.opacity}` : "",
                          selectedItemId === item.id ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-transparent" : "",
                        )}
                        style={{
                          transform: item.rotation ? `rotate(${item.rotation}deg)` : undefined,
                        }}
                        onClick={() => {
                          setSelectedItemId(item.id)
                          if (activeTab !== "items") {
                            setActiveTab("items")
                          }
                        }}
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick edit for selected item */}
              {selectedItem && (
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Quick Edit: {selectedItem.text}</h3>
                      <Button variant="ghost" size="icon" onClick={() => setSelectedItemId(null)}>
                        <X size={16} />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="quick-text">Text</Label>
                        <Input
                          id="quick-text"
                          value={selectedItem.text}
                          onChange={(e) => updateItem(selectedItem.id, "text", e.target.value)}
                        />
                      </div>

                      <div>
                        <Label>Color</Label>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {colorOptions.slice(0, 10).map((color) => (
                            <button
                              key={color}
                              onClick={() => updateItemColor(selectedItem.id, color)}
                              className={cn(
                                `w-6 h-6 rounded-full bg-${color} border`,
                                selectedItem.bg === color ? "border-gray-800 ring-2 ring-gray-400" : "border-gray-300",
                              )}
                              aria-label={`Set color to ${color}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="quick-rotation">Rotation</Label>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateItemRotation(selectedItem.id, (selectedItem.rotation || 0) - 45)}
                          >
                            <RotateCcw size={16} />
                          </Button>
                          <Input
                            id="quick-rotation"
                            type="number"
                            value={selectedItem.rotation || 0}
                            onChange={(e) => updateItemRotation(selectedItem.id, Number.parseInt(e.target.value) || 0)}
                            className="w-20"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateItemRotation(selectedItem.id, (selectedItem.rotation || 0) + 45)}
                          >
                            <RotateCw size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="h-full overflow-auto">
              <h2 className="text-xl font-bold">Grid Settings</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Basic Grid Settings */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 pb-2 border-b">Basic Grid</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="columns">Columns</Label>
                          <Input
                            id="columns"
                            type="number"
                            min="1"
                            max="12"
                            value={gridConfig.columns}
                            onChange={(e) =>
                              setGridConfig({ ...gridConfig, columns: Number.parseInt(e.target.value) || 1 })
                            }
                            className="w-20"
                            disabled={gridConfig.columnAuto}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="rows">Rows</Label>
                          <Input
                            id="rows"
                            type="number"
                            min="1"
                            max="12"
                            value={gridConfig.rows}
                            onChange={(e) => setGridConfig({ ...gridConfig, rows: Number.parseInt(e.target.value) || 1 })}
                            className="w-20"
                            disabled={gridConfig.rowAuto}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gap">Gap</Label>
                        <div className="flex items-center gap-4">
                          <Slider
                            id="gap"
                            min={0}
                            max={12}
                            step={1}
                            value={[gridConfig.gap]}
                            onValueChange={(value) => setGridConfig({ ...gridConfig, gap: value[0] })}
                            className="flex-1"
                          />
                          <span className="w-8 text-center">{gridConfig.gap}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="minHeight">Min Height (px)</Label>
                        <Input
                          id="minHeight"
                          type="number"
                          min="100"
                          max="1000"
                          value={gridConfig.minHeight}
                          onChange={(e) =>
                            setGridConfig({ ...gridConfig, minHeight: Number.parseInt(e.target.value) || 300 })
                          }
                          className="w-full"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Advanced Grid Settings */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 pb-2 border-b">Advanced Grid</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="columnAuto">Auto Columns</Label>
                        <Switch
                          id="columnAuto"
                          checked={gridConfig.columnAuto}
                          onCheckedChange={(checked) => setGridConfig({ ...gridConfig, columnAuto: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="rowAuto">Auto Rows</Label>
                        <Switch
                          id="rowAuto"
                          checked={gridConfig.rowAuto}
                          onCheckedChange={(checked) => setGridConfig({ ...gridConfig, rowAuto: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="responsive">Responsive Grid</Label>
                        <Switch
                          id="responsive"
                          checked={gridConfig.responsive}
                          onCheckedChange={(checked) => setGridConfig({ ...gridConfig, responsive: checked })}
                        />
                      </div>

                      <div className="pt-2">
                        <Label htmlFor="borderRadius">Container Border Radius</Label>
                        <div className="flex items-center gap-4 mt-2">
                          <Slider
                            id="borderRadius"
                            min={0}
                            max={24}
                            step={1}
                            value={[gridConfig.borderRadius]}
                            onValueChange={(value) => setGridConfig({ ...gridConfig, borderRadius: value[0] })}
                            className="flex-1"
                          />
                          <span className="w-8 text-center">{gridConfig.borderRadius}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Container Styling */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 pb-2 border-b">Container Style</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="containerPadding">Padding</Label>
                        <div className="flex items-center gap-4">
                          <Slider
                            id="containerPadding"
                            min={0}
                            max={12}
                            step={1}
                            value={[gridConfig.containerPadding]}
                            onValueChange={(value) => setGridConfig({ ...gridConfig, containerPadding: value[0] })}
                            className="flex-1"
                          />
                          <span className="w-8 text-center">{gridConfig.containerPadding}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="containerBg">Background</Label>
                        <Select
                          value={gridConfig.containerBg}
                          onValueChange={(value) => setGridConfig({ ...gridConfig, containerBg: value })}
                        >
                          <SelectTrigger id="containerBg">
                            <SelectValue placeholder="Select background" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="white">White</SelectItem>
                            <SelectItem value="gray-50">Light Gray</SelectItem>
                            <SelectItem value="gray-100">Gray</SelectItem>
                            <SelectItem value="gray-200">Dark Gray</SelectItem>
                            <SelectItem value="blue-50">Light Blue</SelectItem>
                            <SelectItem value="gray-900">Dark</SelectItem>
                            <SelectItem value="black">Black</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="pt-4">
                        <div
                          className={`w-full h-12 rounded bg-${gridConfig.containerBg} border flex items-center justify-center`}
                        >
                          <span className="text-sm">Background Preview</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>


            {/* Items Tab */}
            <TabsContent value="items" className="space-y-6 h-full overflow-auto">
              <div className="overflow-auto p-2">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold">Grid Items</h2>
                  <Button onClick={addNewItem} className="flex items-center gap-2">
                    <Plus size={16} /> Add Item
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item) => (
                    <Card key={item.id} className={cn("relative", selectedItemId === item.id ? "ring-2 ring-blue-500" : "")}>
                      <CardContent className="p-4">
                        <div className="absolute top-2 right-2 flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteItem(item.id)}
                            className="h-8 w-8 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <div className={`w-4 h-4 rounded-full bg-${item.bg}`}></div>
                          <h4 className="font-bold">{item.text}</h4>
                        </div>

                        <div className="space-y-3">
                          <div className="space-y-1">
                            <Label htmlFor={`text-${item.id}`}>Text</Label>
                            <Input
                              id={`text-${item.id}`}
                              value={item.text}
                              onChange={(e) => updateItem(item.id, "text", e.target.value)}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <Label htmlFor={`colSpan-${item.id}`}>Col Span</Label>
                              <Input
                                id={`colSpan-${item.id}`}
                                type="number"
                                min="1"
                                max="12"
                                value={item.colSpan}
                                onChange={(e) => updateItem(item.id, "colSpan", e.target.value)}
                              />
                            </div>

                            <div className="space-y-1">
                              <Label htmlFor={`rowSpan-${item.id}`}>Row Span</Label>
                              <Input
                                id={`rowSpan-${item.id}`}
                                type="number"
                                min="1"
                                max="12"
                                value={item.rowSpan}
                                onChange={(e) => updateItem(item.id, "rowSpan", e.target.value)}
                              />
                            </div>

                            <div className="space-y-1">
                              <Label htmlFor={`colStart-${item.id}`}>Col Start</Label>
                              <Input
                                id={`colStart-${item.id}`}
                                type="number"
                                min="1"
                                max="12"
                                value={item.colStart}
                                onChange={(e) => updateItem(item.id, "colStart", e.target.value)}
                              />
                            </div>

                            <div className="space-y-1">
                              <Label htmlFor={`rowStart-${item.id}`}>Row Start</Label>
                              <Input
                                id={`rowStart-${item.id}`}
                                type="number"
                                min="1"
                                max="12"
                                value={item.rowStart}
                                onChange={(e) => updateItem(item.id, "rowStart", e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <Label>Color</Label>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {colorOptions.map((color) => (
                                <button
                                  key={color}
                                  onClick={() => updateItemColor(item.id, color)}
                                  className={cn(
                                    `w-6 h-6 rounded-full bg-${color} border`,
                                    item.bg === color ? "border-gray-800 ring-2 ring-gray-400" : "border-gray-300",
                                  )}
                                  aria-label={`Set color to ${color}`}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <Label htmlFor={`shadow-${item.id}`}>Shadow</Label>
                              <Select
                                value={item.shadow || "shadow"}
                                onValueChange={(value) => updateItemShadow(item.id, value)}
                              >
                                <SelectTrigger id={`shadow-${item.id}`}>
                                  <SelectValue placeholder="Shadow" />
                                </SelectTrigger>
                                <SelectContent>
                                  {shadowOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-1">
                              <Label htmlFor={`borderRadius-${item.id}`}>Border Radius</Label>
                              <Select
                                value={item.borderRadius || "rounded"}
                                onValueChange={(value) => updateItemBorderRadius(item.id, value)}
                              >
                                <SelectTrigger id={`borderRadius-${item.id}`}>
                                  <SelectValue placeholder="Border Radius" />
                                </SelectTrigger>
                                <SelectContent>
                                  {borderRadiusOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`zIndex-${item.id}`}>Z-Index</Label>
                              <span className="text-sm text-muted-foreground">{item.zIndex || 1}</span>
                            </div>
                            <Slider
                              id={`zIndex-${item.id}`}
                              min={1}
                              max={10}
                              step={1}
                              value={[item.zIndex || 1]}
                              onValueChange={(value) => updateItem(item.id, "zIndex", value[0])}
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`opacity-${item.id}`}>Opacity</Label>
                              <span className="text-sm text-muted-foreground">{item.opacity || 100}%</span>
                            </div>
                            <Slider
                              id={`opacity-${item.id}`}
                              min={10}
                              max={100}
                              step={5}
                              value={[item.opacity || 100]}
                              onValueChange={(value) => updateItemOpacity(item.id, value[0])}
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`rotation-${item.id}`}>Rotation</Label>
                              <span className="text-sm text-muted-foreground">{item.rotation || 0}°</span>
                            </div>
                            <Slider
                              id={`rotation-${item.id}`}
                              min={-180}
                              max={180}
                              step={5}
                              value={[item.rotation || 0]}
                              onValueChange={(value) => updateItemRotation(item.id, value[0])}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {items.length === 0 && (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Grid className="h-12 w-12 text-muted-foreground" />
                        <h3 className="text-lg font-medium">No items yet</h3>
                        <p className="text-muted-foreground">Add your first grid item to get started</p>
                        <Button onClick={addNewItem} className="mt-2">
                          <Plus className="mr-2 h-4 w-4" /> Add Item
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Code Tab */}
            <TabsContent value="code" className="space-y-6 h-full overflow-auto">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Generated Code</h2>
                <Button onClick={copyToClipboard} className="flex items-center gap-2">
                  <Copy size={16} /> Copy Code
                </Button>
              </div>

              <Card>
                <CardContent className="p-0">
                  <pre
                    ref={codeRef}
                    className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-[500px] text-sm"
                  >
                    <code>{generateCode()}</code>
                  </pre>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <h3 className="font-semibold">Usage Instructions</h3>
                <p className="text-muted-foreground">
                  Copy the code above and paste it into your HTML file. The grid uses Tailwind CSS classes, so make sure you
                  have Tailwind CSS set up in your project.
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
    </div>
    </div>
  )
}