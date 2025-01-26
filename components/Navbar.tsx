"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import the Image component from Next.js

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 p-4 shadow-md flex items-center justify-between">
      {/* Logo or brand name */}
      <div className="flex items-center space-x-2">
        <Image src="/AILEARNING.png" alt="Logo" width={40} height={40} /> {/* Adjust the path and size */}
        <Link href="/" className="text-white font-bold text-2xl font-serif">
          AI Learning
        </Link>
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="text-white hover:text-yellow-400 text-lg font-sans">
            Home
          </Link>
        </li>
        <li>
          <Link href="/learn" className="text-white hover:text-yellow-400 text-lg font-sans">
            Learn
          </Link>
        </li>
        <li>
          <Link href="/chat" className="text-white hover:text-yellow-400 text-lg font-sans">
            Chat
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-yellow-400 text-lg font-sans">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}