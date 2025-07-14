import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

function History() {
    const { state, dispatch } = useContext(ChatContext);

    if (state.history.length === 0) return null;

    return (
        <div className="w-full max-w-4xl mx-auto px-4 mt-4">
            <div className="bg-zinc-800 p-4 rounded-xl shadow">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-white text-lg font-semibold">📝 Historial</h2>
                    <button
                        onClick={() => dispatch({ type: 'CLEAR_HISTORY' })}
                        className="text-sm text-red-400 hover:underline"
                    >
                        Borrar historial
                    </button>
                </div>

                <ul className="space-y-3 max-h-72 overflow-y-auto">
                    {state.history.map((msg, idx) => (
                        <li key={idx} className="text-sm">
                            <p><span className="text-blue-400 font-semibold">Tú:</span> <span className="text-white">{msg.prompt}</span></p>
                            <p><span className="text-green-400 font-semibold">IA:</span> <span className="text-gray-300">{msg.response}</span></p>
                            <hr className="my-2 border-zinc-600" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default History;
