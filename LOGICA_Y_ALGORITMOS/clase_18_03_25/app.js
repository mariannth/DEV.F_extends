// app.js

// Función para capturar el formulario y registrar un destino
const iniciarApp = () => {
    // Capturar el formulario
    const form = document.getElementById("formDestino");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar el envío del formulario y recarga de página

        const destino = document.getElementById("destino").value;
        const fecha = document.getElementById("fecha").value;
        const transporte = document.getElementById("transporte").value;

        // Registrar el destino
        registrarDestino(destino, fecha, transporte);

        // Limpiar los campos del formulario
        form.reset();

        // Mostrar el itinerario actualizado
        mostrarItinerario();
    });
};

// Ejecutar la aplicación
iniciarApp();
