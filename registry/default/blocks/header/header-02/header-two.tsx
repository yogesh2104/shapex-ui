"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import Logo from "@/components/logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 lg:h-20">
            <div className="hidden xl:flex xl:items-center xl:space-x-10">
              <Link
                href="#"
                className="text-base font-medium text-black"
                title="Features"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-black"
                title="Solutions"
              >
                Solutions
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-black"
                title="Resources"
              >
                Resources
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-black"
                title="Pricing"
              >
                Pricing
              </Link>
            </div>
            <div className="xl:absolute xl:-translate-x-1/2 xl:inset-y-5 xl:left-1/2">
              <div className="flex-shrink-0">
                <Link href="#" className="flex" title="Aura UI">
                  <Logo />
                </Link>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 xl:hidden"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md xl:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <div className="hidden xl:flex xl:items-center xl:space-x-10">
              <Link
                href="#"
                className="text-base font-medium text-black"
                title="Sign up"
              >
                Sign up
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-black"
                title="Sign in"
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full"
                title="Cart"
              >
                <ShoppingCart className="w-6 h-6" />
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="py-4 bg-white xl:hidden">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div>
              <div className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                  title="Features"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                  title="Solutions"
                >
                  Solutions
                </Link>
                <Link
                  href="#"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                  title="Resources"
                >
                  Resources
                </Link>
                <Link
                  href="#"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                  title="Pricing"
                >
                  Pricing
                </Link>
              </div>
              <hr className="my-4 border-gray-200" />
              <div className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                  title="Sign up"
                >
                  Sign up
                </Link>
                <Link
                  href="#"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                  title="Sign in"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
