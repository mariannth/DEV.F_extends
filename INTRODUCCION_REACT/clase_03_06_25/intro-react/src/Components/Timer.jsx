import React, {useState, useEffect} from "react";

export default function Timer(){
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        let idInterval = null;

        if(active){
            idInterval = setInterval(() => {
                setTime(previousTime => previousTime + 1)
            }, 1000);
        }

        console.log('El temporizador avanza');

        return () => {
            if(idInterval){
                clearInterval(idInterval);
                console.log('El temporizador se pauso');
            }
        }
    }, [active]);

    const toggleTimer = () => {
        setActive(!active);
    }

    const reset = () => {
        setActive(false);
        setTime(0);
    }

    function formattedTime (time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${(minutes!=0? minutes + " min " : "")}${seconds} seg`;
    }

    return (
        <div>
            <h1>
                Timer: {formattedTime(time)}
            </h1>
            <div>
                <button onClick={() => toggleTimer()}>
                    {active ? 'Pausar' : 'Iniciar'} temporizador
                </button>
                <button onClick={() => reset()}>Reiniciar</button>
            </div>
        </div>
    )
}