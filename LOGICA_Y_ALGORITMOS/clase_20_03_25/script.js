// Usamos un objeto para gestionar los productos y sus contadores
let listaDeCompras = {};

// Función para agregar o actualizar un producto en la lista
const agregarProducto = (producto) => {
    if (!producto) return; // No agregar productos vacíos
    
    // Si el producto ya está en la lista, incrementamos el contador
    if (listaDeCompras[producto]) {
        listaDeCompras[producto]++;
    } else {
        listaDeCompras[producto] = 1; // Si no está, lo agregamos con un contador de 1
    }
    
    mostrarLista();
};

// Función para eliminar un producto de la lista
const eliminarProducto = (producto) => {
    if (listaDeCompras[producto]) {
        // Si el contador es mayor a 1, decrementamos el contador
        if (listaDeCompras[producto] > 1) {
            listaDeCompras[producto]--;
        } else {
            delete listaDeCompras[producto]; // Si el contador es 1, eliminamos el producto
        }
    }
    
    mostrarLista();
};

// Función para mostrar la lista de productos
const mostrarLista = () => {
    const listaElement = document.getElementById("listaDeCompras");
    listaElement.innerHTML = ""; // Limpiar la lista

    // Recorremos el objeto listaDeCompras
    for (let producto in listaDeCompras) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        // Crear el texto con el contador entre paréntesis
        li.innerHTML = `${producto} (${listaDeCompras[producto]}) 
                        <button class="btn-delete btn btn-sm" onclick="eliminarProducto('${producto}')">Eliminar</button>`;
        listaElement.appendChild(li);
    }
};

// Manejo del botón de agregar
document.getElementById("agregarBtn").addEventListener("click", () => {
    const productoInput = document.getElementById("productoInput").value.trim();
    agregarProducto(productoInput);
    document.getElementById("productoInput").value = ""; // Limpiar el input
});

// Si el usuario presiona Enter, también se puede agregar un producto
document.getElementById("productoInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const productoInput = document.getElementById("productoInput").value.trim();
        agregarProducto(productoInput);
        document.getElementById("productoInput").value = ""; // Limpiar el input
    }
});
