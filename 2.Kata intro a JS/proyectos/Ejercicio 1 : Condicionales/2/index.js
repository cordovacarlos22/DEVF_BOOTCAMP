//! run script on your browser console
//? function
const divisibleByTwo = () =>{
  //* ask user for a number
  let askUser = prompt(`Input a number to see if it's divisible by 2 `);
  // * reminder of askUser
  let divisible = askUser % 2 ;
  //* if reminder of divisible is 0 then it's divisible 
  if(divisible == 0 ){
    //* only return this is number is divisible by 2 
    return alert(`${askUser} is divisible by 2`);
  }else {
    //* only return thi is number is not divisible by 2
    return alert(`${askUser} is not divisible by 2`);
  };
}
// ! runs function
divisibleByTwo();