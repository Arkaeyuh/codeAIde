import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-black">
        <h1 className="text-4xl font-bold">Welcome to codeAIde</h1>
        <p className="mt-4 text-gray-400">Scroll for details</p>
        <Link href="/login">
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </Link>

        {/* Moving Coding Languages */}
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

      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
          <div className="bubble bubble3"></div>
          <div className="bubble bubble4"></div>
          <div className="bubble bubble5"></div>
        </div>
        <h2 className="text-3xl font-bold mb-5 z-10">Why Choose Us?</h2>
        <p className="text-gray-400 text-md text-center max-w-2xl z-10">
          From simply asking questions to hands-on tutorials, interactive challenges, and AI-guided learning, we provide a comprehensive 
          and personalized approach to mastering programming and technology. Whether you're troubleshooting a specific problem, learning 
          the fundamentals of coding, or diving into advanced concepts, our platform is designed to adapt to your unique needs and pace. With engaging, 
          real-world challenges and step-by-step tutorials, you'll not only learn but also apply your knowledge in meaningful ways. Our AI-powered tools 
          ensure you get instant feedback, personalized recommendations, and guidance tailored to your skill level. Choose us to take control of your learning 
          journey and achieve your goals with confidence and clarity.
        </p>
      </section>

      {/* Features Overview Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="text-3xl font-bold mb-5">Features Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img src="/interactive programming.jpg" alt="Interactive Tutorials" className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-4">Interactive Tutorials</h3>
            <p className="text-gray-400">
            Learn coding through our dynamic and engaging interactive tutorials designed to guide you step-by-step through essential concepts and advanced techniques. Whether you’re a beginner taking your first steps in programming or an experienced developer looking to sharpen your skills, our tutorials are tailored to fit your learning pace and style. With practical exercises, real-world examples, and instant feedback, you’ll gain hands-on experience and a deeper understanding of programming. Our tutorials cover a wide range of topics, from fundamental syntax to complex algorithms, ensuring you’re prepared to tackle any coding challenge confidently.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img src="/AI-assisted-coding.png" alt="AI Assistance" className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-4">AI Assistance</h3>
            <p className="text-gray-400">
            Transform your learning experience with the power of AI. Our AI assistant is here to support you in solving coding problems, debugging errors, and understanding complex concepts with ease. Whether you're stuck on a tricky algorithm or need guidance on how to structure your code, the AI assistant provides personalized and insightful suggestions tailored to your specific needs. By leveraging advanced technology, our assistant offers real-time help, detailed explanations, and recommended resources, making coding less intimidating and more enjoyable. Let our AI assistant be your trusted companion in your coding journey.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img src="/two people coding.jpg" alt="Community Support" className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-4">Community Support</h3>
            <p className="text-gray-400">
            Join a thriving community of learners, developers, and mentors who are all passionate about coding and technology. Our community support system allows you to connect with like-minded individuals, collaborate on projects, share insights, and learn from each other. Whether you have a question about a specific topic, need feedback on your work, or want to find a coding buddy, our community is here to help. With forums, group discussions, and mentorship opportunities, you’ll never feel isolated in your learning journey. Together, we can overcome challenges, celebrate successes, and grow as a collective of innovators and problem-solvers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-bold mb-5">Frequently Asked Questions</h2>
        <div className="w-full max-w-4xl">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-semibold mb-2">What is codeAIde?</h3>
            <p className="text-gray-400">
              codeAIde is a comprehensive tool designed to help you learn coding through interactive tutorials, AI assistance, and community support.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-semibold mb-2">How does the AI assistant work?</h3>
            <p className="text-gray-400">
              Our AI assistant uses advanced algorithms to provide instant feedback, personalized recommendations, and guidance tailored to your skill level.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-semibold mb-2">Can I get support from other learners?</h3>
            <p className="text-gray-400">
              Yes, you can join our community of learners and get support from peers and mentors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}