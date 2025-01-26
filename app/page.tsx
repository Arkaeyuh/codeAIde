import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to the AI Learning Platform</h1>
        <p className="mt-4 text-gray-700">
          Ask coding questions, complete tutorials, and learn at your own pace.
        </p>
        <Link href="/login">
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </Link>
      </section>

      {/* Moving Coding Languages */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <div className="marquee-container">
          <div className="flex animate-marquee space-x-16 text-2xl font-bold text-white text-opacity-50">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Java</span>
            <span>C#</span>
            <span>Ruby</span>
            <span>PHP</span>
            <span>Swift</span>
            <span>Go</span>
            <span>TypeScript</span>
            <span>Kotlin</span>
            <span>Rust</span>
            <span>Perl</span>
            <span>Scala</span>
            <span>Haskell</span>
            <span>Elixir</span>
            <span>C++</span>
            <span>R</span>
            <span>MATLAB</span>
            <span>Dart</span>
            <span>Objective-C</span>
            <span>Shell</span>
            <span>Lua</span>
            <span>Groovy</span>
            <span>COBOL</span>
            <span>Fortran</span>
            <span>Pascal</span>
            <span>Assembly</span>
            {/* Duplicate the list for seamless transition */}
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Java</span>
            <span>C#</span>
            <span>Ruby</span>
            <span>PHP</span>
            <span>Swift</span>
            <span>Go</span>
            <span>TypeScript</span>
            <span>Kotlin</span>
            <span>Rust</span>
            <span>Perl</span>
            <span>Scala</span>
            <span>Haskell</span>
            <span>Elixir</span>
            <span>C++</span>
            <span>R</span>
            <span>MATLAB</span>
            <span>Dart</span>
            <span>Objective-C</span>
            <span>Shell</span>
            <span>Lua</span>
            <span>Groovy</span>
            <span>COBOL</span>
            <span>Fortran</span>
            <span>Pascal</span>
            <span>Assembly</span>
          </div>
        </div>
      </div>
    </div>
  );
}