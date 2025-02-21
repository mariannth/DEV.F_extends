//1. Abstracción: Definir una clase (plantilla) de una figura geométrica

class Figura {
  constructor(color) {
    //El metodo constructor se asegura de que los objetos tengan las propiedades necesarias para funcionar.
    this.color = color;
  }

  //Métodos: Son las acciones que puede realizar un objeto
  calcularArea() {
    throw new Error("El metodo no ha sido implementado");
  }

  obtnerColor() {
    return this.color;
  }
  miNombre(){
    return "Hola soy una figura"
  }
}

//2. Herencia: Creamos subclases específicas (a partir de la clase padre)

class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }
}

class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

//3. Crear objetos (instanciar)
const miCirculo = new Circulo("morado", 14);
const miRectangulo = new Rectangulo("Verde", 12, 6);

console.log("Color del circulo: " + miCirculo.obtnerColor());
console.log("Area del circulo: " + miCirculo.calcularArea());
console.log("Color del rectangulo: " + miRectangulo.obtnerColor());
console.log("Area del rectangulo: " + miRectangulo.calcularArea());
console.log("Rectangulo dice: " + miRectangulo.miNombre());

//4. Polimorfismo: Un objeto puede hacer el mismo trabajo de formas diferentes
function mostrarArea(figura) {
  console.log(figura.calcularArea());
}

mostrarArea(miCirculo);
mostrarArea(miRectangulo);


//5. Encapsulamiento
class Persona {
  #nombre; // Propiedad privada (con #)

  constructor(nombre) {
      this.#nombre = nombre;
  }

  // Getter para obtener el nombre
  get nombre() {
      return this.#nombre;
  }

  // Setter para modificar el nombre (con validación)
  set nombre(nuevoNombre) {
      if (nuevoNombre.length > 2) {
          this.#nombre = nuevoNombre;
      } else {
          console.log("El nombre debe tener más de 2 caracteres.");
      }
  }
}

// Crear una instancia de Persona
const persona1 = new Persona("Juan");

// Acceder al nombre con el getter
console.log(persona1.nombre); // Output: Juan

// Modificar el nombre con el setter
persona1.nombre = "Ana";
console.log(persona1.nombre); // Output: Ana

// Intentar asignar un nombre inválido
persona1.nombre = "A"; // Output: El nombre debe tener más de 2 caracteres.


//FUNCIONES ARROW
const sumar = (a, b) => a + b;

console.log(sumar(5, 3)); // Output: 8
