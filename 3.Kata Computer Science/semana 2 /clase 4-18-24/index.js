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
    if (this.pila.length == 0) {
      return null;
    }
    return this.pila.pop();
  }

  // peek
  mostrarTope() {
    if (this.pila.length == 0) {
      return null;
    }
    return this.pila[this.pila.length - 1];
  }

}

let historialTona = new Pila();
let paginaVisitada = "www.google.com";
historialTona.insertar(paginaVisitada);
paginaVisitada = "www.youtube.com";
historialTona.insertar(paginaVisitada);
paginaVisitada = "www.youtube.com/TaylorSwift"
historialTona.insertar(paginaVisitada);
paginaVisitada = "www.youtube.com/TaylorSwift/Karma";
historialTona.insertar(paginaVisitada);

console.log("La última página que visité fue: " + historialTona.mostrarTope());

console.log("Me regreso a la página anterior...");
historialTona.eliminar();
console.log("La págin anterior fue: " + historialTona.mostrarTope());

console.log("Me regreso a la página anterior...");
historialTona.eliminar();
console.log("La págin anterior fue: " + historialTona.mostrarTope());

console.log("Me regreso a la página anterior...");
historialTona.eliminar();
console.log("La págin anterior fue: " + historialTona.mostrarTope());

console.log("Me regreso a la página anterior...");
historialTona.eliminar();
console.log("La págin anterior fue: " + historialTona.mostrarTope());

class Cola {

  constructor() {
    this.cola = [];
  }

  /*
          Inicio                 Final
          ultimo(en llegar)      primero(en llegar)
          [5, 3, 2, 9, -1, 5, 7, 4]
          agrego el 10
          Inicio                     Final
          ultimo                     primero
          [10, 5, 3, 2, 9, -1, 5, 7, 4]
  */
  agregarElemento(valor) {
    this.cola.unshift(valor);
  }

  /*
      Inicio                 Final
      ultimo(en llegar)      primero(en llegar)
      [5, 3, 2, 9, -1, 5, 7, 4]
      Elimino el primero elemento en llegar
      Inicio              Final
      ultimo              primero
      [5, 3, 2, 9, -1, 5, 7]
*/
  eliminarElemento() {
    return this.cola.pop();
  }

  mostrarPrimero() {
    return this.cola[this.cola.length - 1];
  }

  mostrarUltimo() {
    return this.cola[0];
  }
}

let filaDeTortillas = new Cola();
let personaEnLaFila = "Gerardo";
filaDeTortillas.agregarElemento(personaEnLaFila);

personaEnLaFila = "Erick";
filaDeTortillas.agregarElemento(personaEnLaFila);

personaEnLaFila = "Carlos";
filaDeTortillas.agregarElemento(personaEnLaFila);

personaEnLaFila = "Dolores";
filaDeTortillas.agregarElemento(personaEnLaFila);

personaEnLaFila = "Rafael";
filaDeTortillas.agregarElemento(personaEnLaFila);

console.log("Fila de tortillas ----------------------------------");

console.log("La primer persona en la fila es: " + filaDeTortillas.mostrarPrimero());
console.log("La última persona en la fila es: " + filaDeTortillas.mostrarUltimo());
console.log(filaDeTortillas.eliminarElemento() + " fue despachado");

console.log("La primer persona en la fila es: " + filaDeTortillas.mostrarPrimero());
console.log("La última persona en la fila es: " + filaDeTortillas.mostrarUltimo());
console.log(filaDeTortillas.eliminarElemento() + " fue despachado");

console.log("La primer persona en la fila es: " + filaDeTortillas.mostrarPrimero());
console.log("La última persona en la fila es: " + filaDeTortillas.mostrarUltimo());
console.log(filaDeTortillas.eliminarElemento() + " fue despachado");

console.log("Llegó una persona a la fila");
filaDeTortillas.agregarElemento("Ariel");


console.log("La primer persona en la fila es: " + filaDeTortillas.mostrarPrimero());
console.log("La última persona en la fila es: " + filaDeTortillas.mostrarUltimo());
console.log(filaDeTortillas.eliminarElemento() + " fue despachado");

console.log("La primer persona en la fila es: " + filaDeTortillas.mostrarPrimero());
console.log("La última persona en la fila es: " + filaDeTortillas.mostrarUltimo());
console.log(filaDeTortillas.eliminarElemento() + " fue despachado");

/*

    Stack overflow

    Colas
        - Colas de prioridad
        - Colas circulares
        
        
    Ejercicio
    Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
