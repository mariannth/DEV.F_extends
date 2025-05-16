document
    .getElementById("registroEvento")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const intereses = Array.from(
            document.querySelectorAll('input[name="intereses"]:checked')
        ).map((el) => el.value);
        const horario = document.querySelector(
            'input[name="horario"]:checked'
        )?.value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;

        const nombreValido = /^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/.test(nombre);
        const correoValido = /^[^@]+@[^@]+\.(com|mx|org|net)$/.test(correo);
        const telefonoValido = /^[0-9]{10}$/.test(telefono);

        if (!nombreValido) {
            alert("El nombre solo debe contener letras y espacios.");
            return;
        }

        if (!correoValido) {
            alert("Ingresa un correo con dominio válido (.com, .mx, etc.).");
            return;
        }

        if (!telefonoValido) {
            alert("El teléfono debe tener exactamente 10 dígitos numéricos.");
            return;
        }

        if (intereses.length === 0 || !horario) {
            alert("Por favor, selecciona tus intereses y horario preferido.");
            return;
        }

        // Cargar registros previos (si existen)
        const registrosPrevios =
            JSON.parse(localStorage.getItem("registros")) || [];

        // Nuevo registro
        const nuevoRegistro = {
            nombre,
            correo,
            telefono,
            intereses,
            horario,
            fecha,
            hora,
        };

        // Guardar todos los registros
        registrosPrevios.push(nuevoRegistro);
        localStorage.setItem("registros", JSON.stringify(registrosPrevios));

        window.location.href = "resumen.html";
    });
