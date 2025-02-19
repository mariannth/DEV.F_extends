// Definir el objeto libro
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    capitulos: ["Capítulo 1", "Capítulo 2", "Capítulo 3"],
  
    // Método para describir el libro
    describirLibro: function() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
  
    // Método para agregar un capítulo
    agregarCapitulo: function(nuevoCapitulo) {
      this.capitulos.push(nuevoCapitulo);
      console.log(`Se agregó "${nuevoCapitulo}" al libro.`);
    },
  
    // Método para eliminar un capítulo por nombre
    eliminarCapitulo: function(capitulo) {
      const index = this.capitulos.indexOf(capitulo);
      if (index !== -1) {
        this.capitulos.splice(index, 1);
        console.log(`Se eliminó "${capitulo}" del libro.`);
      } else {
        console.log(`No se encontró el capítulo "${capitulo}".`);
      }
    },
  
    // Método para mostrar los capítulos del libro
    listarCapitulos: function() {
      console.log(`Capítulos del libro "${this.titulo}":`);
      this.capitulos.forEach((cap, index) => console.log(`${index + 1}. ${cap}`));
    }
  };
  
  // Pruebas del objeto
  libro.describirLibro(); // Mostrar información del libro
  libro.listarCapitulos(); // Mostrar capítulos
  
  libro.agregarCapitulo("Capítulo 4"); // Agregar un nuevo capítulo
  libro.eliminarCapitulo("Capítulo 2"); // Eliminar un capítulo
  
  libro.listarCapitulos(); // Mostrar capítulos actualizados
  