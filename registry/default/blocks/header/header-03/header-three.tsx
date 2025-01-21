"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/registry/default/lib/utils";
import { Button } from "@/registry/default/ui/button";
import Logo from "@/components/logo";
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/registry/default/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/default/ui/navigation-menu";
import Link from "next/link";

type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "Solutions",
    href: "#",
    children: [
      { title: "Aute Laboris", href: "#" },
      { title: "Consectetur Labore", href: "#" },
      { title: "Dolor Minim", href: "#" },
    ],
  },
  {
    title: "Products",
    href: "#",
    children: [
      { title: "Ea Sit In Eu", href: "#" },
      { title: "Aenean Sed", href: "#" },
      { title: "Ea Ea Et Irure", href: "#" },
    ],
  },
  { title: "Global Guidance", href: "#" },
  { title: "Customers", href: "#" },
  { title: "Partners", href: "#" },
  { title: "Resources", href: "#" },
];

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetTitle className="sr-only">title</SheetTitle>
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <div key={item.title}>
            <div className="font-medium mb-2">{item.title}</div>
            {item.children && (
              <div className="pl-4 flex flex-col gap-2">
                {item.children.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <NavigationMenu className="hidden md:flex">
    <NavigationMenuList>
      {navItems.map((item) => (
        <NavigationMenuItem key={item.title}>
          {item.children ? (
            <>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  {item.children.map((child) => (
                    <NavigationMenuLink
                      key={child.title}
                      href={child.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {child.title}
                      </div>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </>
          ) : (
            <NavigationMenuLink
              href={item.href}
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              {item.title}
            </NavigationMenuLink>
          )}
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto my-2">
      <header
        className={cn(
          "sticky top-2 inset-x-0 border rounded-full select-none",
          scroll && "backdrop-blur-md",
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Logo />
            <DesktopNav />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden md:inline-flex">
              Request a proposal
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
