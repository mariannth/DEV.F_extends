// Lista de productos con nombre, precio y categoría
const productos = [
    { nombre: "Camiseta", precio: 50, categoria: "Ropa" },
    { nombre: "Zapatos deportivos", precio: 120, categoria: "Calzado" },
    { nombre: "Gorra", precio: 30, categoria: "Accesorios" },
    { nombre: "Pantalones", precio: 80, categoria: "Ropa" },
    { nombre: "Balón de fútbol", precio: 40, categoria: "Deportes" }
];

// Mostrar productos en la tabla
function mostrarProductos(lista) {
    const productosTableBody = document.getElementById("productosTableBody");
    productosTableBody.innerHTML = ''; // Limpiar la tabla antes de mostrar los productos

    lista.forEach(producto => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>${producto.categoria}</td>
        `;
        productosTableBody.appendChild(row);
    });
}

// Filtrar productos por precio
document.getElementById("filtrarBtn").addEventListener("click", () => {
    const productosFiltrados = productos.filter(producto => producto.precio < 100);
    mostrarProductos(productosFiltrados);
    // Mostrar el total del precio de los productos filtrados
    const total = productosFiltrados.reduce((acum, producto) => acum + producto.precio, 0);
    alert(`El total de los productos filtrados es: $${total}`);
});

// Ordenar productos alfabéticamente por nombre
document.getElementById("ordenarBtn").addEventListener("click", () => {
    const productosOrdenados = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    mostrarProductos(productosOrdenados);
});

// Generar lista de nombres de productos con map
document.getElementById("mapearBtn").addEventListener("click", () => {
    const nombres = productos.map(producto => producto.nombre);
    const nombresLista = document.getElementById("nombresLista");
    nombresLista.innerHTML = ''; // Limpiar la lista antes de mostrar los nombres

    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        nombresLista.appendChild(li);
    });
});

// Verificar si algún producto supera los $100 con some
document.getElementById("verificarPrecioBtn").addEventListener("click", () => {
    const existeProductoCaro = productos.some(producto => producto.precio > 100);
    if (existeProductoCaro) {
        alert("Hay productos que superan los $100.");
    } else {
        alert("No hay productos que superen los $100.");
    }
});

// Verificar si todos los productos son de la categoría "Ropa" con every
document.getElementById("verificarCategoriaBtn").addEventListener("click", () => {
    const todosSonRopa = productos.every(producto => producto.categoria === "Ropa");
    if (todosSonRopa) {
        alert("Todos los productos son de la categoría 'Ropa'.");
    } else {
        alert("No todos los productos son de la categoría 'Ropa'.");
    }
});

// Verificar si existe un producto específico con includes
document.getElementById("verificarProductoBtn").addEventListener("click", () => {
    const nombreProductoBuscado = "Camiseta";
    const existeProducto = productos.some(producto => producto.nombre === nombreProductoBuscado);
    if (existeProducto) {
        alert(`El producto ${nombreProductoBuscado} está en la lista.`);
    } else {
        alert(`El producto ${nombreProductoBuscado} no está en la lista.`);
    }
});

// Inicializar la página mostrando todos los productos
mostrarProductos(productos);
