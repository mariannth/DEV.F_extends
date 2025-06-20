import { useReducer, useRef, useCallback, useEffect, useState } from "react";
import { FaPlus, FaMinus, FaRedo, FaUndo } from "react-icons/fa";
import "./CounterGame.css";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + action.payload,
                history: [
                    ...state.history,
                    `+${action.payload} (Nuevo valor: ${state.count + action.payload})`
                ],
            };
        case "decrement":
            return {
                count: state.count - 1,
                history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`],
            };
        case "reset":
            return initialState;
        case "undo":
            { if (state.history.length === 0) return state;

            const newHistory = state.history.slice(0, -1);

            const lastEntry = newHistory[newHistory.length - 1];
            const match = lastEntry?.match(/Nuevo valor: (-?\d+)/);
            const prevCount = match ? parseInt(match[1]) : 0;

            return {
                count: prevCount,
                history: newHistory,
            }; }

        default:
            return state;
    }
}

export default function CounterGame() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const incrementBtnRef = useRef(null);
    const [inputValue, setInputValue] = useState(1);

    useEffect(() => {
        incrementBtnRef.current.focus();
    }, []);

    const handleIncrement = useCallback(() => {
        dispatch({ type: "increment", payload: parseInt(inputValue) || 1 });
    }, [inputValue]);

    const handleDecrement = useCallback(() => {
        dispatch({ type: "decrement" });
    }, []);

    const handleReset = useCallback(() => {
        if (confirm("¿Seguro que deseas reiniciar el contador?")) {
            dispatch({ type: "reset" });
        }
    }, []);

    const handleUndo = useCallback(() => {
        dispatch({ type: "undo" });
    }, []);

    return (
        <div className="container">
            <h1 className="title">Juego de Contador</h1>
            <div className="display count">{state.count}</div>

            <div className="controls">
                <input
                    type="number"
                    min="1"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="input-number"
                />
                <button ref={incrementBtnRef} onClick={handleIncrement} className="btn">
                    <FaPlus /> Incrementar
                </button>
                <button onClick={handleDecrement} className="btn">
                    <FaMinus /> Decrementar
                </button>
                <button onClick={handleReset} className="btn warning">
                    <FaRedo /> Resetear
                </button>
                <button onClick={handleUndo} className="btn secondary">
                    <FaUndo /> Deshacer
                </button>
            </div>

            <h3>Historial:</h3>
            <ul className="history">
                {state.history.length === 0 && <li>No hay historial aún.</li>}
                {state.history.map((entry, idx) => (
                    <li key={idx}>{entry}</li>
                ))}
            </ul>
        </div>
    );
} // Fin componente