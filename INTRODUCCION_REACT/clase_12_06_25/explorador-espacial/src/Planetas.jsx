import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Planetas() {
  const [planetas, setPlanetas] = useState(
    JSON.parse(localStorage.getItem('planetas')) || []
  );
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null);
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100); // valor inicial

  // Cuando se selecciona un planeta, reseteamos los contadores
  const handleSeleccionar = (nombre) => {
    const planeta = planetas.find((p) => p.nombre === nombre);
    if (planeta) {
      setPlanetaSeleccionado(planeta);
      setDistancia(0);
      setCombustible(100);
    }
  };

  const avanzar = () => {
    if (combustible <= 0) return;

    const kmAvanzados = 10;
    const combustibleConsumido = 5;

    const nuevaDistancia = distancia + kmAvanzados;
    const nuevoCombustible = combustible - combustibleConsumido;

    setDistancia(nuevaDistancia);
    setCombustible(nuevoCombustible);

    // Si hay planeta seleccionado, actualizamos sus datos en la bitácora
    if (planetaSeleccionado) {
      const tiempoViaje = nuevaDistancia / 100; // simulamos
      const actualizado = {
        ...planetaSeleccionado,
        distancia: nuevaDistancia,
        combustibleUsado: 100 - nuevoCombustible,
        tiempoViaje,
      };

      const nuevosPlanetas = planetas.map((p) =>
        p.nombre === actualizado.nombre ? actualizado : p
      );

      setPlanetas(nuevosPlanetas);
      localStorage.setItem('planetas', JSON.stringify(nuevosPlanetas));
      setPlanetaSeleccionado(actualizado); // también actualizamos en pantalla
    }
  };

  const data = {
    labels: planetas.map((p) => p.nombre),
    datasets: [
      {
        label: 'Tiempo de viaje (horas)',
        data: planetas.map((p) => p.tiempoViaje || 0),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: 'Combustible usado',
        data: planetas.map((p) => p.combustibleUsado || 0),
        backgroundColor: 'rgba(255,99,132,0.6)',
      },
    ],
  };

  return (
    <div className="planetas-container">
      <h1>Explorador de Planetas</h1>

      <select
        onChange={(e) => handleSeleccionar(e.target.value)}
        defaultValue=""
        className="planetas-select"
      >
        <option value="" disabled>-- Elige un planeta --</option>
        {planetas.map((p, i) => (
          <option key={i} value={p.nombre}>{p.nombre}</option>
        ))}
      </select>

      {planetaSeleccionado && (
        <>
          <div className="tarjeta-planeta">
            <h2>{planetaSeleccionado.nombre}</h2>
            <p>Distancia recorrida: {distancia} km</p>
            <p>Combustible restante: {combustible} unidades</p>
            <p>Tiempo estimado: {planetaSeleccionado.tiempoViaje?.toFixed(2)} horas</p>
            <p>Combustible usado: {planetaSeleccionado.combustibleUsado}</p>
          </div>

          <button onClick={avanzar} disabled={combustible <= 0}>
            Avanzar
          </button>
        </>
      )}

      <h2>Gráfica de Viajes</h2>
      <Bar data={data} />
    </div>
  );
}

export default Planetas;
