import React, { useState, useEffect, useRef } from 'react';

function Bitacora() {
  const [planetas, setPlanetas] = useState(
    JSON.parse(localStorage.getItem('planetas')) || []
  );
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const inputImagenRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('planetas', JSON.stringify(planetas));
  }, [planetas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
      distancia: 0,
      combustibleUsado: 0,
      tiempoViaje: 0,
    };

    setPlanetas([...planetas, nuevoPlaneta]);
    setNombre('');
    setDescripcion('');
    setImagen(null);

    if (inputImagenRef.current) {
      inputImagenRef.current.value = '';
    }
  };

  const handleDelete = (index) => {
    const nuevosPlanetas = [...planetas];
    nuevosPlanetas.splice(index, 1);
    setPlanetas(nuevosPlanetas);
  };

  return (
    <div className="bitacora-container">
      <h1>Bitácora de Exploración</h1>

      <form onSubmit={handleSubmit} className="bitacora-form">
        <input
          type="text"
          placeholder="Nombre del planeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])}
          ref={inputImagenRef}
        />
        <button type="submit">Guardar</button>
      </form>

      <h2>Planetas Registrados</h2>
      <ul className="planetas-lista">
        {planetas.map((planeta, index) => (
          <li key={index} className="planeta-item">
            <h3>{planeta.nombre}</h3>
            <p>{planeta.descripcion}</p>
            {planeta.imagen && (
              <img src={planeta.imagen} alt={planeta.nombre} className="planeta-img" />
            )}
            <button onClick={() => handleDelete(index)} className="btn-eliminar">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bitacora;
