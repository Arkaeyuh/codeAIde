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
      // Simulated success
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
    <div className="flex items-center justify-center h-screen bg-000">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-black text-2xl mb-4 font-bold text-center">Sign Up</h1>
        {error && (
          <motion.div
            className="mb-4 text-red-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}
        <div className="mb-4">
          <label className="text-black block mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <motion.input
            className="text-black w-full border p-2 rounded"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="test@example.com"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="mb-4">
          <label className="text-black block mb-1 font-semibold" htmlFor="password">
            Password
          </label>
          <motion.input
            className="text-black w-full border p-2 rounded"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password123"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-black block mb-1 font-semibold"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <motion.input
            className="text-black w-full border p-2 rounded"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="password123"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 font-semibold rounded hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>
        <motion.button
          type="button"
          onClick={handleBackToLogin}
          className="w-full bg-gray-600 text-white p-2 font-semibold rounded mt-2 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Login
        </motion.button>
      </motion.form>
    </div>
  );
}