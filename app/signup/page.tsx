"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    // Simple validation for matching passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Simulate sign-up process (replace this with API call)
    try {
      console.log("User signed up:", { email, password });
      router.push("/login"); // Redirect to login page
    } catch (err) {
      setError("Failed to sign up. Please try again later.");
    }
  }

  function handleBackToLogin() {
    router.push("/login");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center text-black mb-6">Sign Up</h1>
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
            type="email"
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
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <motion.input
            className="text-black w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          Sign Up
        </motion.button>
        <motion.button
          type="button"
          onClick={handleBackToLogin}
          className="w-full bg-gray-700 text-white font-semibold py-3 rounded mt-4 hover:bg-gray-800 transition-all shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Login
        </motion.button>
      </motion.form>
    </div>
  );
}
