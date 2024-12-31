"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SearchComponent from "./SearchComponent";

export default function Navbar() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [test, setTest] = useState(false);

  // Set `isClient` to true after component mounts to ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
    const regex = /^(\/blog\/.+|\/about)$/;
    setTest(regex.test(pathname));
  }, [pathname]); // Recompute on pathname change

  if (!isClient) {
    return null; // Or render loading spinner or null until client-side is ready
  }

  return (
    <nav className="bg-gradient-to-b from-black to-gray-900 text-white py-4 shadow-md fixed top-0 right-0 left-0 shadow-indigo-950 z-50">
      <div className="container flex items-center justify-between md:justify-around px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-indigo-500 font-handwriting">
            Inkspire
          </Link>
        </div>

        {/* Links */}
        <div
          className={`flex space-x-6 ${pathname === "/blog" ? "hidden md:flex" : ""} `}
        >
          <Link href="/" className="hover:text-indigo-500">
            Home
          </Link>
          <Link
            href={"/about"}
            className={`hover:text-indigo-500 ${pathname === "/about" ? "hidden" : ""}  `}
          >
            About
          </Link>
          <Link
            href={"/blog"}
            className={`hover:text-indigo-500 ${pathname === "/blog" ? "hidden" : ""} `}
          >
            Blogs
          </Link>
        </div>
        <div className="flex space-x-14 items-center">
          {/* Search Bar */}
          {!test && <SearchComponent />}
        </div>
      </div>
    </nav>
  );
}
