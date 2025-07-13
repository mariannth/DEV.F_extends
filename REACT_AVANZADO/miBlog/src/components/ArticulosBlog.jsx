import React, { useEffect, useState } from "react";
import '../components/ArticulosBlog.css';

export default function ArticulosBlog() {
    const [razas, setRazas] = useState([]);
    const [razaSeleccionada, setRazaSeleccionada] = useState('');
    const [imagenUrl, setImagenUrl] = useState('');
    const [error, setError] = useState(null);

    // Obtener lista de razas
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then(data => {
                if (data.status !== 'success') throw new Error('No se pudieron obtener las razas');
                setRazas(Object.keys(data.message));
            })
            .catch(err => setError(err.message));
    }, []);

    // Obtener imagen cuando cambia la raza
    useEffect(() => {
        if (!razaSeleccionada) return;
        fetch(`https://dog.ceo/api/breed/${razaSeleccionada}/images/random`)
            .then(res => res.json())
            .then(data => {
                if (data.status !== 'success') throw new Error('No se pudo obtener la imagen');
                setImagenUrl(data.message);
            })
            .catch(err => setError(err.message));
    }, [razaSeleccionada]);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">🐶 Selecciona una raza de perro</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <select
                className="form-select mb-4"
                onChange={(e) => setRazaSeleccionada(e.target.value)}
                defaultValue=""
            >
                <option value="" disabled>Selecciona una raza</option>
                {razas.map((raza) => (
                    <option key={raza} value={raza}>
                        {raza.charAt(0).toUpperCase() + raza.slice(1)}
                    </option>
                ))}
            </select>

            {imagenUrl && (
                <div className="text-center">
                    <img src={imagenUrl} alt={razaSeleccionada} className="img-fluid rounded shadow" />
                    <p className="mt-3">Raza: <strong>{razaSeleccionada}</strong></p>
                </div>
            )}
        </div>
    );
}