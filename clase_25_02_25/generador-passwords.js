// Función para generar una contraseña aleatoria
function generarPassword() {
    const length = document.getElementById("length").value;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;

    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_-+=<>?/{}[]|";

    let caracteres = letrasMinusculas;
    if (includeNumbers) caracteres += numeros;
    if (includeSymbols) caracteres += simbolos;
    if (includeUppercase) caracteres += letrasMayusculas;

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex];
    }

    document.getElementById("passwordOutput").value = password;
}

// Función para copiar la contraseña generada
function copiarPassword() {
    const passwordField = document.getElementById("passwordOutput");
    passwordField.select();
    document.execCommand("copy");
    alert("Contraseña copiada al portapapeles.");
}
