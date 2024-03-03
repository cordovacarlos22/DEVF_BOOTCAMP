const ramdomArrar = () => {
  const arr = [];
  for (let index = 0; index < 10; index++) {

    arr.push(Math.floor(Math.random() * 100)) // Returns a random integer from 0 to 100 and gets added to arr
  };
  return arr;
};

ramdomArrar();