//  --------------------------------------------------------------------------

//! pilas (stacks)
// ------------------------------------------
class Pila {
  constructor() {
    this.pila = [];
  }

  // fondo            tope
  //  0                 5
  // [0, 2, 9, 15, 24, -1]
  // n = 6

  // push
  insertar(valor) {
    this.pila.push(valor);
  }
  /* [0, 2, 9, 15, 24, -1] -> push(8) -> [0, 2, 9, 15, 24, -1, 8] */

  // pop
  eliminar() {
    return this.pila.pop();
  }

  // peek
  mostrarTope() {
    return this.pila[this.pila.length - 1];
  }

}
// --------------------------------------------------------------------------
//! cola (queues)






