export default function MessageList({ messages }) {
    return (
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 bg-transparent scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent">
            {messages.length === 0 && (
                <p className="text-center text-gray-400 mt-4">Empieza una conversación...</p>
            )}
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-md ${msg.sender === "user"
                            ? "bg-blue-600 text-white self-end ml-auto"
                            : "bg-gray-700 text-white self-start mr-auto"
                        }`}
                >
                    {msg.text}
                </div>
            ))}
        </div>
    );
}
