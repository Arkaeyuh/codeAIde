import React from "react";
import ChatClient from "./ChatClient";

export default function ChatPage() {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mt-8">
        AI Coding Assistant
      </h1>
      <ChatClient />
    </div>
  );
}
