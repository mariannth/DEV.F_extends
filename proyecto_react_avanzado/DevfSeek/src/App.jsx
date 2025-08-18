
import { useState } from "react";
// import ChatForm from "./components/ChatForm";
//import MessageList from "./components/MessageList";

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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
