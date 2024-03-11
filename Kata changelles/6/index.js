const pares = () => {
  let pare = [];

  for (let i = 0; i < 101; i++) {
    let reminder = i % 2;
    if (reminder == 0) {
      pare.push(i)

    }

  };

  return pare
}