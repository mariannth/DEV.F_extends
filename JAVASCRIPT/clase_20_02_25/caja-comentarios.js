// Función para agregar comentarios
function agregarComentario() {
    let inputComentario = document.getElementById("comentario");
    let comentarioTexto = inputComentario.value.trim();

    if (comentarioTexto === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    let listaComentarios = document.getElementById("listaComentarios");

    // Crear un nuevo elemento de lista
    let nuevoComentario = document.createElement("li");

    // Obtener fecha y hora actual
    let fechaActual = new Date();
    let fechaTexto = fechaActual.toLocaleDateString() + " " + fechaActual.toLocaleTimeString();

    // Estructura del comentario
    nuevoComentario.innerHTML = `
        <strong>${comentarioTexto}</strong>
        <br> <span class="fecha">${fechaTexto}</span>
        <button class="eliminar" onclick="eliminarComentario(this)">X</button>
    `;

    // Agregar el comentario a la lista
    listaComentarios.appendChild(nuevoComentario);

    // Limpiar el textarea después de agregar el comentario
    inputComentario.value = "";
}

// Función para eliminar un comentario
function eliminarComentario(boton) {
    let comentario = boton.parentElement;
    comentario.remove();
}
