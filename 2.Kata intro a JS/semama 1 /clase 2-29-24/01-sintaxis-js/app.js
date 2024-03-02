//Podemos declarar variables con let, var, const
let n = 'nombre';
console.log(n)
console.log('Ejecutando...')
let edad = 34;

//Declaración y asignación
let paisOrigen = 'Colombia'

//Solo declaración de variable. La variable se declara solo la primera vez
let users  //undefined
users = 'mucha gente'


//!Tipos de datos :


//! datos tipo string
let txt1 = "Lorem ipsum"
let txt2 = 'Nuevo texto'
let txt3 = `aquin hay ${users}`

console.log(txt3);


//! tipo de dato null 
let recompensas = null;
// type of regresa el tipo de dato guardado en una variable
console.log(`Variable txt1 es un tipo de data ${typeof txt1}`);

//! datos tipo numericos 

let num1 = 2;

//!datos tipo booleano
let boolTrue = true;
let boolFalse = false;

//! tipo de dato object

let iphone19 = {
  procesador: 'mi procesador',
  pantalla: '12',
  ram: '8gb'

}

let pelicula = {
  nombre: 'resplandor',
  year: 1960,
  premios: 4,
  director: 'mi director'

}

console.log(pelicula.nombre);

console.log(`El director del resplandor es ${pelicula.director}`)

// operadores de incremento y decremento

let corazones = 5;
corazones++ // 6
corazones++ //7

console.log('Tienes:', corazones, ' vidas'); // tienes 7 vidas
corazones-- // 6
corazones--//5
corazones -= 3; //2 
console.log('Tienes:', corazones, ' vidas'); // tienes 2 vidas
corazones += 2 //4
console.log('Tienes:', corazones, ' vidas'); // tienes 4 vidas

// booleanos comparativos, igualdad, logicos

