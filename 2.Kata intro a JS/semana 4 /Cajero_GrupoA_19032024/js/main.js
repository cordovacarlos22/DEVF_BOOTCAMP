const accounts = [
    { mail: "mali@gmail.com", saldo: 900, password: "123456" },
    { mail: "joss@hotmail.com", saldo: 500, password: "password" },
    { mail: "alex@outlook.com.mx", saldo: 700, password: "jkhkl" },
    { mail: "andrea@gmail.com", saldo: 700, password: "123456" },
];

/* La variable donde voy a guardar esa referencia al elemento en el DOM (formulario) */
const form = document.querySelector('#loginForm')
const user = form.querySelector('#userInput');
const password = form.querySelector('#inputPassword');
let flag = false

/* Voy a estar pendiente de cuando suceda el evento "submit" de mi formulario */
form.addEventListener('submit', event => {
    /* Previene que por defecto se recargue la página al enviar el formulario */
    event.preventDefault();
    event.stopPropagation();
    for (let i = 0; i < accounts.length; i++) {
        /* Estamos validando para el mismo usuario del arreglo, que coincida el correo y la contraseña */
        if (accounts[i].mail === user.value && accounts[i].password === password.value) {
            console.log("Acceso garantizado");
            flag = true;
        }
    }
    if (flag) {
        setTimeout(() => {
            window.location.href = "../pages/home.html"
        }, 1000)
    }
})