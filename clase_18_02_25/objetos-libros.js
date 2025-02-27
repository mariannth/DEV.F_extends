// Array para almacenar los libros
let libros = [];

// Definimos la clase Libro
class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = [];
    }

    // Método para obtener la descripción del libro
    describirLibro() {
        return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}. Estado: ${this.estado}.`;
    }

    // Método para agregar un capítulo
    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo);
    }

    // Método para eliminar un capítulo por su nombre
    eliminarCapitulo(capitulo) {
        this.capitulos = this.capitulos.filter(c => c !== capitulo);
    }

    // Método para cambiar el estado del libro
    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
}

// Función para agregar un libro al array y mostrarlo en la UI
function agregarLibro() {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let anio = parseInt(document.getElementById("anio").value);
    let estado = document.getElementById("estado").value;

    if (!titulo || !autor || isNaN(anio)) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let nuevoLibro = new Libro(titulo, autor, anio, estado);
    libros.push(nuevoLibro);
    actualizarListaLibros();
}

// Función para mostrar la lista de libros
function actualizarListaLibros() {
    let listaLibros = document.getElementById("listaLibros");
    listaLibros.innerHTML = "";

    libros.forEach((libro, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <strong>${libro.titulo}</strong> - ${libro.autor} (${libro.anio})
            <br> Estado: ${libro.estado}
            <button onclick="cambiarEstadoLibro(${index})">Cambiar Estado</button>
            <button onclick="eliminarLibro(${index})">Eliminar</button>
        `;
        listaLibros.appendChild(li);
    });
}

// Función para cambiar el estado de un libro (Disponible / Prestado)
function cambiarEstadoLibro(index) {
    libros[index].estado = libros[index].estado === "disponible" ? "prestado" : "disponible";
    actualizarListaLibros();
}

// Función para eliminar un libro de la lista
function eliminarLibro(index) {
    libros.splice(index, 1);
    actualizarListaLibros();
}
