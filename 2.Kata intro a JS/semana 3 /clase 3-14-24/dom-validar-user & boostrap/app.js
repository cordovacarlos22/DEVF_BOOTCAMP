console.log("cuentas", cuentas); // test bd for cuentas 


const loginForm = document.querySelector("#loginForm");
const inputUser = document.querySelector("#userName");
const inputPass = document.querySelector("#userPass");
const userContainer = document.querySelector("#userContainer");


// forma 1 
// function validarUsuario (){

// };


// loginForm.addEventListener("click",validarUsuario);
// forma 2 
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();


  const useCard = (user,saldo) => {
    return (
      `
    <div class="userCard">
    <h1>Hola ${user}</h1>
    <small>Saldo: $${saldo}</small>
    </div>
      `
    )
  };

  // console.log(useCard())

  // iterar el array  cuentas que esta en db.js
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].name == inputUser.value.toLowerCase() && cuentas[i].pass == inputPass.value) {
      console.log("bienvenido")
      userContainer.innerHTML = useCard(cuentas[i].name, cuentas[i].saldo);
      return 
    }

  };

  console.log("no existes")


});
