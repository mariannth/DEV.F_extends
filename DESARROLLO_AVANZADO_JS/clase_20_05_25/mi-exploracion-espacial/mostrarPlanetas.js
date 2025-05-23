const cowsay = require("cowsay");

function mostrarBienvenida() {
  console.log(
    cowsay.say({
      text: "¡Exploración planetaria iniciada!",
      e: "^^",
      T: "U "
    })
  );
}

function mostrarPlanetas(planetas) {
  planetas.forEach(planeta => {
    console.log(`🪐 ¡Planeta ${planeta.nombre} descubierto!`);
    console.log(`   📝 Descripción: ${planeta.descripcion}`);
    console.log(`   📅 Descubierto en: ${planeta.descubiertoEn}`);
    console.log('--------------------------------------------');
  });
}

module.exports = { mostrarBienvenida, mostrarPlanetas };
