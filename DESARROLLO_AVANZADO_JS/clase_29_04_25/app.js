const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.classList.add('processing'); // Clase para el estado 'En Proceso'
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
        
        // Actualizar las clases para reflejar el estado visualmente
        if (status === 'En Proceso') {
            listItem.classList.add('processing');
            listItem.classList.remove('completed');
        } else if (status === 'Completado') {
            listItem.classList.add('completed');
            listItem.classList.remove('processing');
        }
    }
}

async function processOrder(order) {
    // Simula el tiempo de preparación del pedido con un setTimeout y una Promise
    const preparationTime = Math.floor(Math.random() * 5000) + 1000; // Entre 1 y 5 segundos

    try {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(); // El pedido se "completa" después del tiempo aleatorio
            }, preparationTime);
        });

        // Una vez completado el pedido, actualizamos el estado
        updateOrderStatus(order, 'Completado');
    } catch (error) {
        console.error('Error en el procesamiento del pedido:', error);
    }
}
