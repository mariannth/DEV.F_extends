document.addEventListener('DOMContentLoaded',()=>{
    
    const productoInput = document.getElementById('producto');
    const agregar = document.getElementById('agregar');
    const lista = document.getElementById('lista-compras');

    let productos = [];

    agregar.addEventListener('click',() =>{
       const nombreProducto = productoInput.value.trim();
       if(nombreProducto){
           const nuevoProducto = {
               nombre: nombreProducto,
               comprado: false
           };
           productos.push(nuevoProducto);
           agregarProductoALista(nuevoProducto)
           productoInput.value = '';
       }
    }); 

    function agregarProductoALista(producto){
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = producto.nombre;
        lista.appendChild(nuevoItem);
    }
})