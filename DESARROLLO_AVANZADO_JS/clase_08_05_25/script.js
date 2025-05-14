// script.js

// Simulando una base de datos de mesas
const mesasDisponiblesTotal = 5;  // Número total de mesas en el restaurante
let mesasReservadas = [];  // Array para almacenar las reservas (mesa y nombre del cliente)

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mesasDisponibles = mesasDisponiblesTotal - mesasReservadas.length;

            if (mesasSolicitadas <= mesasDisponibles) {
                resolve("Mesas disponibles");
            } else {
                reject(`No hay suficientes mesas disponibles. Solo hay ${mesasDisponibles} mesas libres.`);
            }
        }, 2000);  // Simula un retraso en la verificación (2 segundos)
    });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const envioExitoso = Math.random() > 0.1; // 90% de probabilidad de éxito
            if (envioExitoso) {
                resolve(`Correo de confirmación enviado a ${nombreCliente}`);
            } else {
                reject("Error al enviar el correo de confirmación.");
            }
        }, 1500);  // Simula el envío de un correo (1.5 segundos)
    });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    const resultadoDiv = document.getElementById("resultadoReserva");
    resultadoDiv.innerHTML = "Procesando reserva...";  // Mensaje mientras se procesa la reserva

    try {
        // Verificamos disponibilidad de mesas
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        console.log(disponibilidad);
        resultadoDiv.innerHTML = disponibilidad;  // Muestra disponibilidad de mesas

        // Simulamos la confirmación del correo
        const confirmacion = await enviarConfirmacionReserva(nombreCliente);
        console.log(confirmacion);
        resultadoDiv.innerHTML += `<br>${confirmacion}`;  // Muestra la confirmación del correo

        // Si la reserva fue exitosa, agregamos la reserva al arreglo de mesasReservadas
        for (let i = 0; i < mesasSolicitadas; i++) {
            mesasReservadas.push({ nombre: nombreCliente, mesa: mesasReservadas.length + 1 });
        }

        // Actualizamos la tabla de mesas reservadas
        actualizarTablaMesas();
    } catch (error) {
        console.log(error);
        resultadoDiv.innerHTML = `<span class="text-danger">${error}</span>`;  // Muestra el error
    }
}

// Función para actualizar la tabla de mesas reservadas
function actualizarTablaMesas() {
    const tablaReservas = document.getElementById("tablaReservas");
    tablaReservas.innerHTML = ""; // Limpiar la tabla antes de actualizar

    // Si no hay reservas, mostramos un mensaje
    if (mesasReservadas.length === 0) {
        tablaReservas.innerHTML = "<tr><td colspan='2'>No hay reservas actuales.</td></tr>";
    } else {
        mesasReservadas.forEach((reserva, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${reserva.mesa}</td><td>${reserva.nombre}</td>`;
            tablaReservas.appendChild(row);
        });
    }
}

// Evento para manejar la reserva al enviar el formulario
document.getElementById("formReserva").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar que se recargue la página al enviar el formulario

    const nombreCliente = document.getElementById("nombreCliente").value;
    const mesasSolicitadas = parseInt(document.getElementById("mesasSolicitadas").value);

    hacerReserva(nombreCliente, mesasSolicitadas);
});

// Inicializamos la tabla de mesas reservadas
actualizarTablaMesas();
