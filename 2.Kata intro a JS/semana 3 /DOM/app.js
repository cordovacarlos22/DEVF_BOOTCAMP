// const titulo = document.getElementById("miTitulo");
// const btn = document.getElementById("miBtn");
// const parrafos = document.getElementsByClassName('p-content');

// function saludar (){
//   // alert("Hola DOM");

//   titulo.classList.add('superTitulo');
//   titulo.innerText = 'Te saludamos desde Javascript 🤗'

// };

// btn.addEventListener("click",saludar);

// realizar un contador con un boton de incremento y otro de descremento el contador no debe
// sumar mas de 20 y no puede mostrat numero negativos.

// 1. Crear los elementos necesarios en HTML done 
// 2.Capturar / obtener los elementos HTML y guarlos en variables de js
//3. Crear las(s) funciones(es) Ej. increment() decremento()
// 4. asignar los eventlistener a los botones para ejecutar funccion por medio del evento indicado
/*
const resta = document.querySelector(".restar"); // trae class restar de html
const display = document.querySelector(".display"); // trae class display de html
const suma = document.querySelector(".sumar"); // trae class de sumar de html

console.log(display.innerHTML) // probar el value de display 

// esta funcion hace un decremento de 1 al valor dentro de display
const decremento = () => {
  // condicion asegura que la suma no sea mayor a 20 
  if (display.innerHTML > 20){
    display.innerHTML -- // efectua la resta del valor actuar de display 
  }else {
    return alert("no se pueden efectuar sumas mayores a 20 😞")
  }
}
// esta funcion hace un incremento de 1 al valor dentro de display
if(display.innerHTML < 20){
const increment = () => {
  // condicion asegura que la suma no sea mayor a 20 
    display.innerHTML++ // efectua la suma del valor actuar de display 
  } else {
    return alert("no se pueden efectuar sumas mayores a 20 😞")
  }
}


resta.addEventListener("click",decremento); // esta a la escucha de click para ejecutar decremento
suma.addEventListener("click", increment);// esta a la escucha de click para ejecutar incremento


*/

//1.
const formulario = document.querySelector("#mainform");
const userName = document.querySelector("#name");
const userColor = document.querySelector("#colors");
const display = document.querySelector("#display");

//2 Y 3

formulario.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log("formulario enviado");

  console.log(userName.value);
  console.log(userColor.value);
  display.parentElement.style.backgroundColor =  userColor.value;
  display.innerHTML += `
 
    <h1>Hola ${userName.value}</h1>
  `
  userName = ''

});
