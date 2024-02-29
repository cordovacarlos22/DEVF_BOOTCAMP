//! run script on your browser console
//? declare function
const pairOrNotPair = () => {

  //* ask user to input a number
  let askUser = prompt('Enter a Number To check if it pare or not');
  let reminder = askUser % 2
  //? is number is pair return  Your number is pair otherwise Your Number is not pair
  reminder == 0 ? alert("Your Number is pair") : alert('Your number is not pair');
}

pairOrNotPair();