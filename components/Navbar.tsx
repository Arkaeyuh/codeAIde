"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent p-4 shadow-md flex items-center justify-between fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      {/* Logo or brand name */}
      <div className="flex items-center space-x-2">
        <Image src="/AILEARNING.png" alt="Logo" width={40} height={40} />
        <Link href="/" className="text-white font-bold text-2xl font-poppins">
          CodeAI
        </Link>
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="text-white hover:text-yellow-400 text-lg font-poppins transition duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-yellow-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/learn" className="text-white hover:text-yellow-400 text-lg font-poppins transition duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-yellow-400">
            Learn
          </Link>
        </li>
        <li>
          <Link href="/chat" className="text-white hover:text-yellow-400 text-lg font-poppins transition duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-yellow-400">
            Chat
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-yellow-400 text-lg font-poppins transition duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-yellow-400">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}