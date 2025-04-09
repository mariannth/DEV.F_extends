function generarAleatorios() {
    const arr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100));
    document.getElementById("inputArray").value = arr.join(", ");
}

function buscarMaximo() {
    const input = document.getElementById("inputArray").value;
    const arr = input.split(",").map(Number);
    if (!arr.length) return;

    const history = [];
    const max = encontrarMax(arr, history);
    document.getElementById("resultado").textContent = `🔝 Máximo: ${max}`;
    dibujarGrafica(history, "Búsqueda del Máximo");
}

function buscarMinimo() {
    const input = document.getElementById("inputArray").value;
    const arr = input.split(",").map(Number);
    if (!arr.length) return;

    const history = [];
    const min = encontrarMin(arr, history);
    document.getElementById("resultado").textContent = `🔻 Mínimo: ${min}`;
    dibujarGrafica(history, "Búsqueda del Mínimo");
}

function encontrarMax(arr, history) {
    history.push([...arr]);
    if (arr.length === 1) return arr[0];

    const mid = Math.floor(arr.length / 2);
    const left = encontrarMax(arr.slice(0, mid), history);
    const right = encontrarMax(arr.slice(mid), history);

    return Math.max(left, right);
}

function encontrarMin(arr, history) {
    history.push([...arr]);
    if (arr.length === 1) return arr[0];

    const mid = Math.floor(arr.length / 2);
    const left = encontrarMin(arr.slice(0, mid), history);
    const right = encontrarMin(arr.slice(mid), history);

    return Math.min(left, right);
}
