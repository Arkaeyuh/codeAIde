"use client";

import React, { useState } from "react";

export default function ChatClient() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponse(""); // clear previous response
    try {
      const res = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.message || "No response");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          className="text-black border rounded p-2"
          placeholder="Ask a coding question..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="font-semibold bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {response && (
        <div className="mt-4 p-2 border rounded bg-gray-50">
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}
