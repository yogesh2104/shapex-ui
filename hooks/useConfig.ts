import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { BaseColor, CssVars } from '@/lib/base-color'
import { Style } from '@/registry/registry-styles'

type Config = {
  style: Style["name"]
  theme: BaseColor["name"];
  cssVars: {
    light: Partial<CssVars["light"]>;
    dark: Partial<CssVars["dark"]>;
  };
};

type ConfigStore = {
  config: Config
  updateConfig: (newConfig: Partial<Config>) => void
}

const useConfig = create<ConfigStore>()(
  persist(
    (set) => ({
      config: {
        style:"default",
        theme: "minimalist",
        cssVars: {
          light: {
            background: "0 0% 100%",
            foreground: "240 10% 3.9%",
            card: "0 0% 100%",
            "card-foreground": "240 10% 3.9%",
            popover: "0 0% 100%",
            "popover-foreground": "240 10% 3.9%",
            primary: "240 5.9% 10%",
            "primary-foreground": "0 0% 98%",
            secondary: "240 4.8% 95.9%",
            "secondary-foreground": "240 5.9% 10%",
            muted: "240 4.8% 95.9%",
            "muted-foreground": "240 3.8% 46.1%",
            accent: "240 4.8% 95.9%",
            "accent-foreground": "240 5.9% 10%",
            destructive: "0 84.2% 60.2%",
            "destructive-foreground": "0 0% 98%",
            border: "240 5.9% 90%",
            input: "240 5.9% 90%",
            ring: "240 5% 64.9%",
            radius: "0.5rem",
          },
          dark: {
            background: "240 10% 3.9%",
            foreground: "0 0% 98%",
            card: "240 10% 3.9%",
            "card-foreground": "0 0% 98%",
            popover: "240 10% 3.9%",
            "popover-foreground": "0 0% 98%",
            primary: "0 0% 98%",
            "primary-foreground": "240 5.9% 10%",
            secondary: "240 3.7% 15.9%",
            "secondary-foreground": "0 0% 98%",
            muted: "240 3.7% 15.9%",
            "muted-foreground": "240 5% 64.9%",
            accent: "240 3.7% 15.9%",
            "accent-foreground": "0 0% 98%",
            destructive: "0 62.8% 30.6%",
            "destructive-foreground": "0 85.7% 97.3%",
            border: "240 3.7% 15.9%",
            input: "240 3.7% 15.9%",
            ring: "240 4.9% 83.9%",
          },
      },
      },
      updateConfig: (newConfig) => 
        set((state) => ({
          config: { ...state.config, ...newConfig }
        })),
    }),
    {
      name: "config",
    }
  )
)

export const useConfigValue = () => {
  const config = useConfig((state) => state.config)
  const updateConfig = useConfig((state) => state.updateConfig)
  return [config, updateConfig] as const
}

export { useConfig }