// Declaro mi arreglo vacio 

let librosLeidos = [];

// Declaro mi funcion agregarLibro 

function agregarLibro(tituloLibro){
    librosLeidos.push(tituloLibro); // Agregamos un elemento al arreglo 
}

agregarLibro("El principito");
agregarLibro ("Las mujeres que amaban demasiado"); 
agregarLibro("Los 7 esposos de Evelyn Hugo");

console.log(librosLeidos); // Imprimimos el arreglo

// Mostrar los libros leidos 

function mostrarLibrosLeidos(){
    for(let i = 0; i< librosLeidos.length; i++){
        console.log(librosLeidos[i]);
    }
}

// Tenemos que llamar a la funcion 

mostrarLibrosLeidos();

console.log("--------------------")
agregarLibro("El alquimista");
agregarLibro ("La chica del tren"); 
agregarLibro("Javascript para principiantes");

mostrarLibrosLeidos();

console.log("--------------------")

// Array para almacenar los libros leídos
let LibrosLeidos = [];

// Función para agregar un libro al array
function agregarLibro(titulo) {
    if (titulo && typeof titulo === "string") {
        LibrosLeidos.push(titulo);
        console.log(`Libro agregado: "${titulo}"`);
    } else {
        console.log("Error: Debes proporcionar un título válido.");
    }
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (LibrosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros leídos:");
        LibrosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// Ejemplo de uso
agregarLibro("El principito");
agregarLibro("Cien años de soledad");
mostrarLibrosLeidos();
