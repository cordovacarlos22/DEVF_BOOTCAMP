const pushRamdonLetter = (letters) => {

  letters = prompt('Ingresar cualquier palabra separada por comas  ej: 1,2,3  o c,a,r,l,o,s');
  let arr = []
  for (let index = 0; index < letters.length; index++) {

    if (letters[index] == ',') {
      ''
    } else {
      arr.push(letters[index]);
    };

  };
  console.log(arr)
  return alert(arr);
  
};

pushRamdonLetter();

