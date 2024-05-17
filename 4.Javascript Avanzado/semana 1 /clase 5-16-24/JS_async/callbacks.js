/**
 * The code defines functions to greet and say goodbye to a user based on their input, and prompts the
 * user for their name to execute the corresponding function.
 * @param nombre - The parameter `nombre` is a variable that represents the name of the user. It is
 * used in the functions `saludar`, `despedir`, and the arrow function passed as a callback to
 * `processarEntradaUsuario`. The user is prompted to enter their name, which is then
 */
// ! ejemplo 1 

// const saludar = (nombre) => {
//   alert(`Hola ${nombre}`);
// };

// const despedir = (nombre) => {
//   alert(`adios ${nombre}`)
// }

// const processarEntradaUsuario = (callback) => { 
//   let nombre = prompt("Por favor dame tu nombre: ");
//   callback(nombre);
// }

// processarEntradaUsuario(saludar);
// processarEntradaUsuario((nombre) => alert(`adios ${nombre}`));


// ! ejemplo 2 



/**
 * The code defines two functions that return 100 and 200 respectively, and a function that sums the
 * results of calling these two functions.
 * @returns In the code provided, the `sumaDosFuciones` function is called with `soyCien()` and
 * `soyDosCientos()` as arguments. These functions return the values 100 and 200 respectively.
 */


// const soyCien = () => { return 100 };

// const soyDosCientos = () => { return 200 };

// const sumaDosFuciones = (callBackOne, callBackTwo) => {
//   const suma = callBackOne + callBackTwo
//   return suma;
// }


// console.log(sumaDosFuciones(soyCien(), soyDosCientos()));
// console.log(soyCien() + soyDosCientos());



// ! ejemplo 3

// setTimeout(() => console.log('Han pasado 5 segundos'), 5000);

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.error(err)
// );

// ! ejemplo 4 
// setTimeout(() => {
//   console.log('Han pasado 5 segundos')
//   setTimeout(() => {
//     console.log('han pasado otros 5 segundos'
//       )
//   }, 5000)
// }, 5000);
