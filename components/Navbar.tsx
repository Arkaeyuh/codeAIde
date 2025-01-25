"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 p-4 shadow-md flex items-center justify-between">
      {/* Logo or brand name */}
      <div className="text-white font-bold text-xl">
        <Link href="/">AI Learning</Link>
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Learn" className="text-white hover:text-blue-400">
            Learn
          </Link>
        </li>
        <li>
          <Link href="/chat" className="text-white hover:text-blue-400">
            Chat
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-blue-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-blue-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
