"use client";

import React from "react";
import { Moon,Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const ThemeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      ref={ref}
      variant={"link"}
      className={cn("", className)}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      {...props}
    >
      <Moon className="hidden size-10 text-neutral-800 dark:block dark:text-neutral-200" />
      <Sun className="size-10 text-neutral-800 dark:hidden dark:text-neutral-200" />
    </Button>
  );
});


