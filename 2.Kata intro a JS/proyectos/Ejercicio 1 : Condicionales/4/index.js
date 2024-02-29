//! run script on browser console
//? declare function

const winnerOrNotWinner = () =>{
  //* ask user for there client number
  let askUser = prompt(`Enter Your Client Number`);
  // * return  Ganaste un premio if == 1000 otherwise lo sentimo,sigue participando
  askUser == 1000 ? alert('Ganaste un premio') : alert('Lo sentimos, sigue participando')
}

winnerOrNotWinner();