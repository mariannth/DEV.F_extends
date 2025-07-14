import { useContext, useState } from "react";
import useOllamaHook from "../hooks/useOllamaHook";
import { ChatContext } from "../context/ChatContext";

function ChatBox() {
    const [prompt, setPrompt] = useState("");
    const { handleSubmit, response, loading, error } = useOllamaHook();
    const { dispatch } = useContext(ChatContext);

    const sendPrompt = async () => {
        if (!prompt.trim()) return;
        await handleSubmit(prompt);
        dispatch({ type: 'ADD_MESSAGE', payload: { prompt, response } });
        setPrompt("");
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <div className="bg-zinc-800 rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-bold text-white mb-4 text-center">🤖 Chat </h1>

                <div className="min-h-[200px] bg-zinc-900 rounded-lg p-4 mb-4 overflow-y-auto">
                    {response && (
                        <div className="space-y-2">
                            <div className="text-right">
                                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg max-w-[80%] text-sm">
                                    {prompt}
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="inline-block bg-zinc-700 text-gray-200 px-4 py-2 rounded-lg max-w-[80%] text-sm whitespace-pre-line">
                                    {response}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                    <textarea
                        className="flex-1 p-3 rounded-md bg-zinc-700 text-white placeholder-gray-400 border border-zinc-600 resize-none"
                        rows="3"
                        placeholder="Escribe tu pregunta..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />

                    <button
                        onClick={sendPrompt}
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition disabled:opacity-50"
                    >
                        {loading ? "Enviando..." : "Enviar"}
                    </button>
                </div>

                {error && (
                    <div className="mt-4 text-red-400 text-sm">
                        ❗ Error: {error}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChatBox;
