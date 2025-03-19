// Función para agregar un comentario
function agregarComentario() {
    const inputComentario = document.getElementById("commentInput").value.trim();
    if (inputComentario === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    // Crear el elemento del comentario
    const comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comment");

    // Obtener la fecha y hora actual
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleString();

    // Agregar contenido al comentario
    comentarioDiv.innerHTML = `
        <p><strong>${fechaFormateada}:</strong> ${inputComentario}</p>
        <button onclick="eliminarComentario(this)">Eliminar</button>
    `;

    // Agregar el comentario al área de comentarios
    document.getElementById("commentSection").prepend(comentarioDiv);

    // Limpiar el campo de texto
    document.getElementById("commentInput").value = "";
}

// Función para eliminar un comentario
function eliminarComentario(boton) {
    boton.parentElement.remove();
}
