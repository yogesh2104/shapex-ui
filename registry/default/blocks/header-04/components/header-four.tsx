"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/registry/default/lib/utils";
import { Button } from "@/registry/default/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet";
import ContactForm from "@/registry/default/blocks/header-04/components/contact-form";
import Logo from "@/components/logo";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Policy", href: "#" },
  { title: "Blog", href: "#" },
];

const listVariants = {
  closed: { x: "100vh" },
  opened: {
    x: 0,
    transition: { type: "tween", when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const listItemVariants = {
  closed: { x: -10, opacity: 0 },
  opened: { x: 0, opacity: 1 },
};

const HeaderFour: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header
      className={cn(
        "sticky top-1 inset-x-0 border rounded-full select-none",
        scroll && " backdrop-blur-md",
      )}
    >
      <div className="flex justify-between items-center h-[70px]">
        <Link
          href="/"
          className="flex items-center cursor-pointer h-9 w-28 ml-5 md:ml-[-20px]"
        >
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-14">
          <div className="flex gap-12 md:gap-14">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`text-sm lg:text-lg ${
                  pathname === item.href ? "text-blue-500" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="rounded-full mr-[-20px]">Contact</Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-screen md:max-w-[80vw] m-auto"
            >
              <SheetHeader>
                <SheetTitle>Reach Out to Us</SheetTitle>
              </SheetHeader>
              <ContactForm />
            </SheetContent>
          </Sheet>
        </nav>

        <div className="md:hidden mr-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6 dark:text-white text-black" />
            )}
          </Button>

          {mobileMenuOpen && (
            <motion.nav
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="fixed inset-0 w-screen h-screen bg-black flex flex-col items-center justify-center gap-8 text-2xl z-40"
            >
              {navItems.map((item) => (
                <motion.div key={item.title} variants={listItemVariants}>
                  <Link
                    href={item.href}
                    className="text-white whitespace-nowrap"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={listItemVariants}>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="text-xl whitespace-nowrap bg-gradient-to-l from-[#091C82] to-[#182046] hover:bg-[#393baf] text-white rounded-full">
                      Contact Us
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="top"
                    className="w-screen md:max-w-[80vw] m-auto"
                  >
                    <SheetHeader>
                      <SheetTitle>Reach Out to Us</SheetTitle>
                    </SheetHeader>
                    <ContactForm />
                  </SheetContent>
                </Sheet>
              </motion.div>
            </motion.nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderFour;
