// Lista de regalos de ejemplo
const gifts = ["muñeca", "carro", "lego", "pelota", "puzzle", "videojuego"];

function findGift(gifts, giftName, index = 0) {
    // Caso base: si llegamos al final del array y no encontramos el regalo
    if (index === gifts.length) {
        return `❌ El regalo "${giftName}" no está en la lista.`;
    }

    // Caso base: si encontramos el regalo en la posición actual
    if (gifts[index].toLowerCase() === giftName.toLowerCase()) {
        return `✅ ¡Encontrado! El regalo "${giftName}" está en la posición ${index + 1}.`;
    }

    // Llamada recursiva con el siguiente índice
    return findGift(gifts, giftName, index + 1);
}

function searchGift() {
    const giftName = document.getElementById("giftInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (giftName === "") {
        resultDiv.innerHTML = "⚠️ Por favor, ingresa un nombre de regalo.";
        resultDiv.style.display = "block";
        resultDiv.classList.remove("alert-success", "alert-danger");
        resultDiv.classList.add("alert-warning");
        return;
    }

    // Llamamos a la función recursiva
    const resultMessage = findGift(gifts, giftName);

    // Mostramos el resultado
    resultDiv.innerHTML = resultMessage;
    resultDiv.style.display = "block";
    resultDiv.classList.remove("alert-warning");
    
    if (resultMessage.includes("✅")) {
        resultDiv.classList.add("alert-success");
    } else {
        resultDiv.classList.add("alert-danger");
    }
}
