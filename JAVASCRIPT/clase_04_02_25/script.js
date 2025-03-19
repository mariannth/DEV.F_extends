/*
    TIPOS DE DATOS EN JAVASCRIPT
*/

// Tipo: Number (Número)
var edad = 25 
var precio = 100.50
var puntos = 0
var temperatura = -19

// Tipo: String (Texto)
var nombre = "Valery" //Con comillas dobles
var saludo = 'Hola, ¿Cómo estás?' //Con comillas simples
var character = "a"
var edadCadena = "25"

//Tipo: Boolean (Booleano)
var esMayor = true //Verdadero
var tienePermiso = false //Falso

//Tipo: Symbol (Identificador único)
var identificador1 = Symbol("id")
var identificador2 = Symbol("id")

//Tipo: BigInt (Números muy grandes)
var numeroGrande = 347485734583490584390n //Notar la "n" al final

/*
    NULL, UNDEFINED y NaN en Javascript
*/

//Tipo: Null (Valor vacío INTENCIONALMENTE)
var vacio = null

//Tipo: Undefined (Valor NO asignado)
var sinDefinir

//Tipo NaN (Not a Number - Un no Número , esto pasa cuando una operación no es un número válido)
var resultadoInvalido = "Hola" * 10


/*
    ¿Qué es console.log?
    console.log se usa para mostrar valores en la consola del navegador.
    Es útil para depurar y entender cómo funcionan las variables en el código.
*/

console.log(edad)
console.log(nombre)

/*
    ¿Qué es typeof?
    typeof nos permite conocer el tipo de dato de una variable.
    Es útil para depuración y validaciones de código.
*/

console.log(typeof edad)
console.log(typeof edadCadena)


// Datos de prueba
const datos = [
    { nombre: "edad", valor: 25 },
    { nombre: "precio", valor: 100.50 },
    { nombre: "puntos", valor: 0 },
    { nombre: "temperatura", valor: -19 },
    { nombre: "nombre", valor: "Valery" },
    { nombre: "saludo", valor: 'Hola, ¿Cómo estás?' },
    { nombre: "character", valor: "a" },
    { nombre: "edadCadena", valor: "25" },
    { nombre: "esMayor", valor: true },
    { nombre: "tienePermiso", valor: false },
    { nombre: "identificador1", valor: Symbol("id").toString() },
    { nombre: "identificador2", valor: Symbol("id").toString() },
    { nombre: "numeroGrande", valor: 347485734583490584390n.toString() },
    { nombre: "vacio", valor: null },
    { nombre: "sinDefinir", valor: undefined },
    { nombre: "resultadoInvalido", valor: NaN }
];

// Insertar datos en la tabla
const tabla = document.getElementById("tabla-datos");

datos.forEach(dato => {
    let fila = document.createElement("tr");

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = dato.nombre;

    let celdaValor = document.createElement("td");
    celdaValor.textContent = dato.valor;

    let celdaTipo = document.createElement("td");
    celdaTipo.textContent = typeof dato.valor;

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaValor);
    fila.appendChild(celdaTipo);

    tabla.appendChild(fila);
});
