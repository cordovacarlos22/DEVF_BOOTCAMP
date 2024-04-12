// paso 1 definimos la clase 

class Animal {
  // paso 2 definimos las propiedades
  constructor(colorOjos, numeroDeOjos, color, numeroPatas) {
    this.colorOjos = colorOjos;
    this.numeroDeOjos = numeroDeOjos;
    this.color = color;
    this.numeroPatas = numeroPatas;
  }

  // paso 3 definimos los metodos
  hablar(sonido) {
    console.log(sonido);
  }

  comer() {
    console.log('comiendo..');
  }
  caminar() {
    console.log('caminando...');
  }
};

//4 instancialos la clase, creamos el/los objetos
let gato = new Animal('verde', 2, 'gris', 4);
let perro = new Animal('cafe', 2, 'amarillo', 4);
console.log(gato);
console.log(gato.hablar('miau'));
console.log(gato.comer());
console.log(gato.caminar());
console.log(perro);
console.log(perro.hablar('wof wof'));
console.log(perro.comer());
console.log(perro.caminar());

