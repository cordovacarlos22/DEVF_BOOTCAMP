

// js no cuenta con el control de alcance de su variables 
// sin imbargo existen convenciones que nos pueden ayudar a indicar  cuando
// un elemento debe ser privado , es decir, que solo lo manipularemos
// de metodos dentro de la clase
class Contador{
  constructor(valor) {
    
    //utilizar "_" para definir que un atributo o metodo lo utilisaremos privado 
    // es decir,que solo lo manipularemos dentro de la clase
    this._valor = valor;
  }
  sumar() {
    this._valor = this._valor + 1;
  }

  obtenerValor() {
    return this._valor;
  }
}

let contador = new Contador(0);  
contador.sumar();
console.log(contador.obtenerValor());