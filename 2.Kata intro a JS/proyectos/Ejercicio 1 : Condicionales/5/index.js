//! run script in your browser console.

const biggestNumber = () => {
    let num1 = prompt("Ingresar numero 1 de 2");
    let num2 = prompt("Ingresar numero 2 de 2");
    //* validates if num1 is bigger than num2
    if (num1 > num2) {
        alert(`biggest number is : ${num1}`); // * returns num1 is bigger
    } else if (num2 > num1) {
        alert(`biggest number is : ${num2}`); // * returns num2 is bigger
    } else {
        alert(`both number: ${num1} and ${num2} are equal`);// * returns both number are equal
    };
};
biggestNumber()