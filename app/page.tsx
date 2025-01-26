import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800">
        <h1 className="text-4xl font-bold">Welcome to the AI Learning Platform</h1>
        <p className="mt-4 text-gray-400">Scroll for details</p>
        <Link href="/login">
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </Link>

        <div className="absolute bottom-0 w-full overflow-hidden">
          <div className="marquee-container">
            <div className="flex animate-marquee space-x-16 text-2xl font-bold text-gray-500">
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
      </section>

      <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-black to-gray-800">
        <h2 className="text-3xl font-bold mb-5">Why Choose Us?</h2>
        <p className="text-gray-400 text-md text-center max-w-2xl">
          
          From simply asking questions to hands-on tutorials, interactive challenges, and AI-guided learning, we provide a comprehensive 
          and personalized approach to mastering programming and technology. Whether you're troubleshooting a specific problem, learning 
          the fundamentals of coding, or diving into advanced concepts, our platform is designed to adapt to your unique needs and pace. With engaging, 
          real-world challenges and step-by-step tutorials, you'll not only learn but also apply your knowledge in meaningful ways. Our AI-powered tools 
          ensure you get instant feedback, personalized recommendations, and guidance tailored to your skill level. Choose us to take control of your learning 
          journey and achieve your goals with confidence and clarity.
          
        </p>
      </section>
    </div>
  );
}
