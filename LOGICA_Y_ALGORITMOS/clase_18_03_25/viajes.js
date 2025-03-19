// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte) => {
    // Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    const itinerarioDiv = document.getElementById("itinerario");
    itinerarioDiv.innerHTML = "";  // Limpiar el contenido anterior

    // Mostrar los viajes en el DOM
    destinos.forEach(viaje => {
        const viajeDiv = document.createElement("div");
        viajeDiv.classList.add("viaje");

        viajeDiv.innerHTML = `
            <h3>${viaje.destino}</h3>
            <p><strong>Fecha:</strong> ${viaje.fecha}</p>
            <p><strong>Transporte:</strong> ${viaje.transporte}</p>
            <p><strong>Costo:</strong> $${viaje.costo}</p>
        `;

        itinerarioDiv.appendChild(viajeDiv);
    });
}
