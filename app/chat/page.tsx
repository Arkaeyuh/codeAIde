import React from "react";
import ChatClient from "./ChatClient";

export default function ChatPage() {
  return (
    <div className="mt-36"> {/* Added margin-top class */}
      <h1 className="text-center text-2xl font-semibold mt-8">
        AI Coding Assistant
      </h1>
      <ChatClient />
    </div>
  );
}