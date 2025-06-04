import { useState } from 'react';
import ListaSkills from '../Components/ListaSkills';
import '../css/style.css';

function Tarjeta({ nombre, profesion, mensajeInicial, imagen, skills }) {
    const [mensaje, setMensaje] = useState(mensajeInicial);
    const [temaOscuro, setTemaOscuro] = useState(false);

    const cambiarMensaje = () => {
        setMensaje("¡Gracias por visitar mi tarjeta!");
    };

    const alternarTema = () => {
        setTemaOscuro(!temaOscuro);
    };

    return (
        <div className={`tarjeta ${temaOscuro ? 'oscuro' : 'claro'}`}>
            <img src={imagen} alt={nombre} className="avatar" />
            <h2>{nombre}</h2>
            <h4>{profesion}</h4>
            <p>{mensaje}</p>
            <button onClick={cambiarMensaje}>Cambiar mensaje</button>
            <button onClick={alternarTema}>Cambiar tema</button>
            <ListaSkills skills={skills} />
        </div>
    );
}

export default Tarjeta;
