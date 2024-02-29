//! run script in your browser console.

const biggestNumber = () => {
  let num1 = prompt("Ingresar numero 1 de 3");

  let num2 = prompt("Ingresar numero 2 de 3");

  let num3 = prompt("Ingresar numero 3 de 3");

  //* validates if num1 is bigger than num2
  if (num1 > num2 && num1 > num3 ) {
    alert(`biggest number is : ${num1}`); // * returns num1 is bigger
  } else if (num2 > num1 && num2 > num3 ) {
    alert(`biggest number is : ${num2}`); // * returns num2 is bigger
  } else if (num3 > num1 && num3 > num2) {
    alert(`biggest number is : ${num3}`); // * returns num2 is bigger
  } 
  else {
    alert(`all numbers are equal`);// * returns all both number are equal
  };
};
biggestNumber();
