import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "@/components/logo";
import { Button } from "@/registry/default/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/registry/default/ui/sheet";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetTitle>
          <span className="sr-only">Title</span>
        </SheetTitle>
        <div className="flex flex-col gap-4 mt-8">
          <Link href="/" className="text-lg font-medium hover:text-gray-600">
            Home
          </Link>
          <Link
            href="/products"
            className="text-lg font-medium hover:text-gray-600"
          >
            Products
          </Link>
          <Link
            href="/resources"
            className="text-lg font-medium hover:text-gray-600"
          >
            Resources
          </Link>
          <Link
            href="/pricing"
            className="text-lg font-medium hover:text-gray-600"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-lg font-medium hover:text-gray-600"
          >
            Blog
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="ghost">Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Header = () => {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-gray-600">
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium hover:text-gray-600"
          >
            Products
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium hover:text-gray-600"
          >
            Resources
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-gray-600"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-gray-600"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Log in</Button>
          <Button>Sign up</Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
