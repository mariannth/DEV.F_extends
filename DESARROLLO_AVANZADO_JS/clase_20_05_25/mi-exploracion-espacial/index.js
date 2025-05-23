// // index.js
// const planetas = require('./planetas');

// console.log("=== Registro de Planetas Descubiertos ===\n");

// planetas.forEach(planeta => {
//   console.log(`🌍 Planeta: ${planeta.nombre}`);
//   console.log(`📝 Descripción: ${planeta.descripcion}`);
//   console.log(`📅 Descubierto en: ${planeta.descubiertoEn}`);
//   console.log('---------------------------------------');
// });


// const planetas = require('./planetas');
// const cowsay = require("cowsay");

// console.log(
//   cowsay.say({
//     text: "¡Hola, Explorador! Aquí tienes los planetas descubiertos.",
//     e: "oo",
//     T: "U "
//   })
// );

// planetas.forEach(planeta => {
//   console.log(`🌍 Planeta: ${planeta.nombre}`);
//   console.log(`📝 Descripción: ${planeta.descripcion}`);
//   console.log(`📅 Descubierto en: ${planeta.descubiertoEn}`);
//   console.log('---------------------------------------');
// });

const planetas = require('./planetas');
const { mostrarBienvenida, mostrarPlanetas } = require('./mostrarPlanetas');

mostrarBienvenida();
mostrarPlanetas(planetas);
