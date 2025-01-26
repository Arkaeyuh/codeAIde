"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/learn");
    }
  }

  function handleSignUp() {
    router.push("/signup");
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#topGradient)"
            d="M0,224L40,213.3C80,203,160,181,240,165.3C320,149,400,139,480,128C560,117,640,107,720,106.7C800,107,880,117,960,128C1040,139,1120,149,1200,160C1280,171,1360,181,1400,186.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
          <defs>
            <linearGradient id="topGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#1e293b" /> 
              <stop offset="100%" stopColor="#111827" /> 
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center text-black mb-6">Login</h1>
        {error && (
          <motion.div
            className="mb-4 text-sm text-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <motion.input
            className="text-black w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="test@example.com"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <motion.input
            className="text-black w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password123"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition-all shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue
        </motion.button>
        <motion.button
          type="button"
          onClick={handleSignUp}
          className="w-full bg-gray-700 text-white font-semibold py-3 rounded mt-4 hover:bg-gray-800 transition-all shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>
      </motion.form>

      <div className="absolute bottom-0 inset-x-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#bottomGradient)"
            d="M0,224L40,213.3C80,203,160,181,240,165.3C320,149,400,139,480,128C560,117,640,107,720,106.7C800,107,880,117,960,128C1040,139,1120,149,1200,160C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="bottomGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#1e293b" /> 
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
