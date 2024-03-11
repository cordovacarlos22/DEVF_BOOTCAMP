const imparedNumbers = () => {
  let numbers = 1;
  for (let i = 50; i >= numbers; i) {
    if (numbers & 1) {
      console.log("Number", numbers, "is odd")
    };

    numbers++;
  };
};

imparedNumbers();