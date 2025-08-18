import { useState } from "react";
import ChatForm from "./components/ChatForm";
import MessageList from "./components/MessageList";

export default function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = { sender: "user", text };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-gray-900 flex justify-center items-center p-4">
      <div className="w-full max-w-md h-[90vh] bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/20">
        <header className="text-center py-4 bg-white/10 border-b border-white/10 text-white font-bold text-lg">
          💬 Chat Moderno
        </header>

        <MessageList messages={messages} />

        <ChatForm onSend={handleSendMessage} />
      </div>
    </div>
  );
}
