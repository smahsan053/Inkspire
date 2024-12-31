import { dancingScript } from "./fonts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white px-4">
      <h1
        className={`text-6xl md:text-9xl font-extrabold font-handwriting text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg ${dancingScript.className}`}
      >
        Inkspire
      </h1>
      <p className="mt-4 text-lg md:text-xl font-medium text-gray-300 text-center tracking-wide">
        Unleash your thoughts, one word at a time.
      </p>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-4">
        <Link
          href="blog"
          className="px-6 py-3 text-lg font-semibold bg-pink-600 hover:bg-pink-700 rounded-lg shadow-md transition-colors duration-300"
        >
          Explore Blogs
        </Link>
        <Link
          href="about"
          className="px-6 py-3 text-lg font-semibold bg-gray-700 hover:bg-gray-600 rounded-lg shadow-md transition-colors duration-300"
        >
          About Me
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} Inkspire. All Rights Reserved.
      </footer>
    </div>
  );
}
