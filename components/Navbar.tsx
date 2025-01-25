"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-200 p-4 shadow-sm flex items-center">
      {/* Logo or brand name */}
      <div className="mr-6 font-bold text-xl">
        <Link href="/">AI Learning</Link>
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/chat" className="hover:text-blue-500">
            Chat
          </Link>
        </li>
        {/* Add more links as needed, e.g. Lessons, About, etc. */}
      </ul>
    </nav>
  );
}
