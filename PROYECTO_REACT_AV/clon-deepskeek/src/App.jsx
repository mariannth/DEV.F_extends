import { useState } from "react";
import ChatForm from "./components/ChatForm";

export default function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = { sender: "user", text };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-900 text-white justify-end">
      <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === "user"
                ? "bg-blue-600 self-end"
                : "bg-gray-700 self-start"
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <ChatForm onSend={handleSendMessage} />
    </div>
  );
}
