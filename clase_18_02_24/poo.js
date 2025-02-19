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