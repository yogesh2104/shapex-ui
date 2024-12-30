"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { SidebarNavItem } from "@/config/docs"
import { ChevronDown } from 'lucide-react'
import { useState } from "react"

export interface BlockSideBarProps {
  items: SidebarNavItem[]
}

export function BlockSideBar({ items }: BlockSideBarProps) {
  const pathname = usePathname()

  return items.length ? (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-5 flex flex-col gap-2 mb-5"
    >
      {items.map((item, index) => (
        <SidebarGroup key={index} item={item} pathname={pathname} />
      ))}
    </motion.div>
  ) : null
}

function SidebarGroup({ item, pathname }: { item: SidebarNavItem; pathname: string | null }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex flex-col gap-1">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between rounded-md px-2 py-1 text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{item.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && item?.items?.length && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <BlockSideBarItems items={item.items} pathname={pathname} groupId={`group-${item.title}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function BlockSideBarItems({
  items,
  pathname,
  groupId
}: {
  items: SidebarNavItem[]
  pathname: string | null
  groupId: string
}) {
  return items?.length ? (
    <div className="relative grid grid-flow-row auto-rows-max gap-1 text-sm pl-4">
      {items.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition-colors",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground",
              item.disabled && "opacity-60 cursor-not-allowed hover:opacity-60"
            )}
          >
            {pathname === item.href && (
              <motion.div
                layoutId={groupId}
                className="absolute inset-0 rounded-md border-l-2 border-r-2 border-primary border-neutral-300 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10 shrink-0 text-sm">
              {item.title}
              {item.disabled && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                coming soon
              </span>
            )}
            </span>
          </Link>
        ) : (
          <span
            key={index}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground"
          >
            {item.title}
          </span>
        )
      )}
    </div>
  ) : null
}

