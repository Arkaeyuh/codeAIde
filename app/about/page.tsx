import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Top Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-b from-gray-800">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/programming-gb0e197598_1920.jpg"
            alt="About Us Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left px-6">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-med text 4xl text-gray-300">
          Welcome to our AI Learning Platform, where we provide an 
          immersive and supportive environment for aspiring coders. 
          Our platform offers interactive tutorials, coding challenges, 
          and hands-on sessions to help you master essential programming skills. 
          With AI-powered tools, you receive personalized feedback and guidance 
          tailored to your learning pace, ensuring you grasp both foundational and 
          advanced concepts. Whether you’re just starting out or looking to enhance 
          your coding skills, we’re here to help you achieve your goals with confidence. 
          Join us and start building your coding future today!
          </p>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-black to-gray-800">
        <h2 className="text-3xl font-bold mb-5">The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/Default_pfp.svg.png"
              alt="Sergio B"
              width={200}
              height={200}
              className="rounded-lg shadow-lg mb-4"
            />
            <p className="text-lg font-bold text-white">Sergio B.</p>
            <p className="text-gray-300">ESET</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Default_pfp.svg.png"
              alt="Alexander G"
              width={200}
              height={200}
              className="rounded-lg shadow-lg mb-4"
            />
            <p className="text-lg font-bold text-white">Alexander G.</p>
            <p className="text-gray-300">Computer Science</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Default_pfp.svg.png"
              alt="Anders B"
              width={200}
              height={200}
              className="rounded-lg shadow-lg mb-4"
            />
            <p className="text-lg font-bold text-white">Anders B.</p>
            <p className="text-gray-300">Mathematics</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Default_pfp.svg.png"
              alt="Timothy C"
              width={200}
              height={200}
              className="rounded-lg shadow-lg mb-4"
            />
            <p className="text-lg font-bold text-white">Timothy C.</p>
            <p className="text-gray-300">Computer Science</p>
          </div>
        </div>

        <div className="mt-16 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
          <p className="text-lg text-gray-400 mb-8">
            If you have any questions or need further information, feel free to reach out to us using the form below.
          </p>
          <form className="w-full">
            <div className="mb-4">
              <input
                className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
