"use client";

import React, { useState } from "react";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa"; // Import icons

export default function ChatClient() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ sender: "user" | "ai"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const handleSpeechToText = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition is not supported in your browser. Please use Chrome or Edge.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript; // Get the recognized text
      setPrompt((prev) => prev + transcript); // Append the spoken text to the prompt
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("Speech recognition failed. Please try again.");
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    // Add user message
    setMessages([...messages, { sender: "user", text: prompt }]);
    setPrompt("");
    setLoading(true);

    try {
      const res = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      const aiMessage = data.message || "No response";
      setMessages((prevMessages) => [...prevMessages, { sender: "ai", text: aiMessage }]);
    } catch (error) {
      console.error(error);
      setMessages((prevMessages) => [...prevMessages, { sender: "ai", text: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto mt-3">
      <div className="flex flex-col space-y-4 mb-4 h-96 overflow-y-auto border p-4 rounded-lg custom-scrollbar">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs ${
              message.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black self-start"
            } whitespace-pre-wrap`}
          >
            {message.text}
          </div>
        ))}
        {loading && (
          <div className="p-3 rounded-lg max-w-xs bg-gray-300 text-black self-start">
            AI is thinking...
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <textarea
          className="flex-1 p-2 border rounded text-black"
          placeholder="Ask a coding question..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          type="button"
          className={`font-semibold py-2 px-4 rounded flex items-center justify-center ${
            isListening ? "bg-red-600 text-white" : "bg-gray-700 hover:bg-gray-800"
          }`}
          onClick={handleSpeechToText}
        >
          <FaMicrophone />
        </button>
        <button
          type="submit"
          className="font-semibold bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center"
        >
          <FaPaperPlane className="text-white" />
        </button>
      </form>
    </div>
  );
}
