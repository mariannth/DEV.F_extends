// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        const librosList = document.getElementById("librosList");
        librosList.innerHTML = ''; // Limpiar lista antes de mostrar
        datos.libros.forEach((libro, index) => {
            const item = document.createElement("li");
            item.classList.add("list-group-item");
            item.innerHTML = `${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`;
            librosList.appendChild(item);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);
        mostrarLibros();  // Actualizar la lista de libros en la interfaz
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    setTimeout(() => {
        const libro = biblioteca.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            mostrarLibros();  // Actualizar la lista de libros en la interfaz
        } else {
            console.log("Libro no encontrado");
        }
    }, 1000);
}

// Manejo de eventos de los formularios
document.getElementById("mostrarLibrosBtn").addEventListener("click", mostrarLibros);

document.getElementById("agregarLibroForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const disponible = document.getElementById("disponibilidad").value === "true";
    agregarLibro(titulo, autor, genero, disponible);
});

document.getElementById("actualizarDisponibilidadForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("tituloActualizar").value;
    const nuevoEstado = document.getElementById("nuevoEstado").value === "true";
    actualizarDisponibilidad(titulo, nuevoEstado);
});
