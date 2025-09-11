"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
    { href: "#gallery", label: "Gallery" },
    { href: "#order", label: "Order" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo - top-left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="BakariCustom Logo"
              width={100}
              height={100}
              className="h-auto w-20"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden sm:flex space-x-8 font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-white px-3 py-2 transition-all duration-300
                           before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
                           before:bg-pink-500 before:transition-all hover:before:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-white/10 backdrop-blur-md overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 pt-2 pb-4 space-y-2 font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-white px-3 py-2 relative transition-all duration-300
                           before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
                           before:bg-pink-500 before:transition-all hover:before:w-full"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
