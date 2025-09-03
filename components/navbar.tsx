import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
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

        {/* Links - right side */}
        <ul className="flex space-x-8 font-semibold">
          {[
            { href: "#about", label: "About Us" },
            { href: "#contact", label: "Contact" },
            { href: "#gallery", label: "Gallery" },
            { href: "#order", label: "Order" },
          ].map((link) => (
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
      </div>
    </nav>
  );
}
