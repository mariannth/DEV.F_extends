function buscarPareja() {
    let input = document.getElementById("listaInvitados").value;
    let invitados = input.split(",").map(nombre => nombre.trim()).sort();

    if (invitados.length < 2) {
        document.getElementById("resultado").innerText = "Debe haber al menos dos invitados.";
        return;
    }

    let inicio = 0, siguiente = 1;
    
    while (siguiente < invitados.length) {
        let inicialInicio = invitados[inicio].charAt(0).toUpperCase();
        let inicialSiguiente = invitados[siguiente].charAt(0).toUpperCase();

        if (inicialInicio === inicialSiguiente) {
            document.getElementById("resultado").innerText = `¡Pareja encontrada!: ${invitados[inicio]} y ${invitados[siguiente]}`;
            return;
        }

        inicio++;
        siguiente++;
    }

    document.getElementById("resultado").innerText = "No se encontraron parejas con la misma inicial.";
}
