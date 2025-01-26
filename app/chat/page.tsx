import React from "react";
import ChatClient from "./ChatClient";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col items-center">
      <h1 className="text-center text-2xl font-semibold mt-32">
        AI Coding Assistant
      </h1>
      <div className="w-full max-w-4xl px-4 mt-1">
        <ChatClient />
      </div>
    </div>
  );
}
