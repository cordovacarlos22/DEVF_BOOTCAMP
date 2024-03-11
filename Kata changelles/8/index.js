// Escribe tu código aquí

const multiple = (n) => {
  let divisibleFive = n % 5;
  let divisibleElevent = n % 11;

  if (divisibleFive == 0 && divisibleElevent == 0) {
    return true;
  } else {
    return false;
  };
};