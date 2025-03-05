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


// const rangeContainer = docuemnto.querySelector('.range-container');
// const inputRange= document.querySelector('input[type="range"]');
// const lengthCounter = documento.querySelector('h1');
// const generateBtn = document.querySelector('.generator from button');
// const passwordHeading = document.querySelector('.password-container h1');

// const handleChange = () => {
//     lenghtCounter.textContent = inputRange.value;
// }

// const generatePassword = (passwordLenght) =>{
//     let result = '';
//     let characters = '';


//     //Obtener las opciones seleccionadas
//     const useUppercase = document.querySelector('#uppercase').checked;
//     const useLowercase = document.querySelector('#lowercase').checked;
//     const useNumeros = document.querySelector('#numbers').checked;
//     const useSymbols = document.querySelector('#symbols').checked;

//     //Creamos un conjunto de caracteres a usar en la contraseña
//     if(useUppercase) characters+= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if(useLowercase) characters+= 'abcdefghijklmnopqrstuvwxyz';
//     if(useNumeros) characters+= '0123456789';
//     if(useSymbols) characters+= '!@#$%^&*()_-+=<>?/{}[]|';
//     if(characters === ''){
//         passwordHeading.textContent = 'Selecciona al menos una opción :)';
//         return '';
//     }

//     //Generación de la contraseña
//     for(let i=0; i< passwordLenght; i++){
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return result;
// };

// function PrintPassword = (event) =>{
//     event.preventDefault();
//     const password = generarPassword(inputRange.value);
//     if(password){
//         passwordHeading.textContent = password; //Muestra la contra generada
//     }
// };

