import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // public folder
            alt="BakariCustom Logo"
            width={100}
            height={100}
            className="h-12 w-auto"
          />
        </Link>

        {/* Links */}
        <ul className="flex space-x-8 text-white font-semibold">
          <li>
            <Link href="#about" className="hover:text-pink-500 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-pink-500 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="hover:text-pink-500 transition">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#order" className="hover:text-pink-500 transition">
              Order
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
