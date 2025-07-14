import { createContext, useReducer } from "react";

const ChatContext = createContext();

const initialState = { history: [] };

function chatReducer(state, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return { ...state, history: [...state.history, action.payload] };
        case 'CLEAR_HISTORY':
            return { ...state, history: [] };
        default:
            return state;
    }
}

function ChatProvider({ children }) {
    const [state, dispatch] = useReducer(chatReducer, initialState);

    return (
        <ChatContext.Provider value={{ state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
}

// ✅ SOLUCIÓN AL WARNING: solo exporta componentes y hooks desde aquí
export { ChatProvider, ChatContext };
