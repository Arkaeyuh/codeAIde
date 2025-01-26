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

    // Use next-auth's signIn function
    const result = await signIn("credentials", {
      redirect: false, // We'll handle redirection manually
      email,
      password,
    });

    if (result?.error) {
      // If credentials are wrong or next-auth responded with an error
      setError("Invalid email or password");
    } else {
      // If successful, navigate to homepage or chat
      router.push("/learn");
    }
  }

  function handleSignUp() {
    router.push("/signup");
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
        <h1 className="text-black text-2xl mb-4 font-bold text-center">Login</h1>
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
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="test@example.com"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-black" htmlFor="password">
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
        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 font-semibold rounded hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue
        </motion.button>
        <motion.button
          type="button"
          onClick={handleSignUp}
          className="w-full bg-gray-600 text-white p-2 font-semibold rounded mt-2 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>
      </motion.form>
    </div>
  );
}
