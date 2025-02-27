document.addEventListener("DOMContentLoaded", iniciarApp);

function iniciarApp(){
    const productoInput = document.getElementById("producto");
    const agregar = document.getElementById("agregar");
    const lista = document.getElementById("lista-compras");

    let productos = [];

    agregar.addEventListener("click", function(){
        agregarProducto(productos, productoInput, lista);
    });
}

function agregarProducto(productos, productoInput, lista){
    const nombreProducto = productoInput.value.trim();
    if(nombreProducto){
        const nuevoProducto = {
            nombre: nombreProducto,
            comprado: false
        };
        productos.push(nuevoProducto);
        mostrarProductos(nuevoProducto, lista);
        productoInput.value = '';
    }
}

function mostrarProductos(producto, lista){
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = producto.nombre;
    lista.appendChild(nuevoItem);
}
    

