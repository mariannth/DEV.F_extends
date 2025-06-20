import React, {useReducer} from "react";

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return {count: 0}
        default:
            throw new Error('Accion no soportada: ' + action.type);
    }
}

export default function ContadorReducer () {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return(
        <div>
            <h1>Contador: {state.count}</h1>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}