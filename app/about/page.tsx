import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto p-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center py-16">
        <div className="md:w-1/2">
          <Image src="/programming-gb0e197598_1920.jpg" alt="About Us Image" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            Welcome to our AI Learning Platform. We are dedicated to providing the best learning experience for aspiring coders. Our platform offers a variety of tutorials, coding challenges, and interactive sessions to help you master coding skills.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-3xl font-bold text-center mb-8">The Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image src="/Default_pfp.svg.png" alt="Image 1" width={200} height={200} className="rounded-lg shadow-lg mb-4" />
            <p className="absolute top-2 left-2 text-white font-bold bg-black bg-opacity-50 px-2 py-1 rounded">Sergio B</p>
          </div>
          <p className="text-center text-gray-700">Electronic Systems Engineering Technology</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image src="/Default_pfp.svg.png" alt="Image 2" width={200} height={200} className="rounded-lg shadow-lg mb-4" />
            <p className="absolute top-2 left-2 text-white font-bold bg-black bg-opacity-50 px-2 py-1 rounded">Alexander G</p>
          </div>
          <p className="text-center text-gray-700">Computer Science</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image src="/Default_pfp.svg.png" alt="Image 3" width={200} height={200} className="rounded-lg shadow-lg mb-4" />
            <p className="absolute top-2 left-2 text-white font-bold bg-black bg-opacity-50 px-2 py-1 rounded">Anders B</p>
          </div>
          <p className="text-center text-gray-700">Mathematics</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image src="/Default_pfp.svg.png" alt="Image 4" width={200} height={200} className="rounded-lg shadow-lg mb-4" />
            <p className="absolute top-2 left-2 text-white font-bold bg-black bg-opacity-50 px-2 py-1 rounded">Timmothy C</p>
          </div>
          <p className="text-center text-gray-700">Computer Science</p>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-700 mb-4">
            If you have any questions or need further information, feel free to contact us.
          </p>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" rows={4}></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}