const app = () => {
  let userInput = Number(prompt("Enter a Number in between 1 - 50?"));
  let userInput2 = Number(prompt("Enter a Number in between 1 - 50?"));
  let numbersFifty = 50;
  do {
    
    
    if (userInput === numbersFifty || userInput2 === numbersFifty) {
      console.log("Congratulations! You won!", numbersFifty);
    }else {
      console.log(numbersFifty);
    }
    numbersFifty--;
    

  } while (numbersFifty > 0);

};

app();