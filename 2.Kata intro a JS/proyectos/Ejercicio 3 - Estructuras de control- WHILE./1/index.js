const numberMulipleOfFive = ()=>{
  let askQuestion = Number(prompt("Enter a number to check if it is divisible by 5"))
  let numbersDivisibleBy5 = [];
  do {
    if (askQuestion % 5 === 0) {
      numbersDivisibleBy5.push(askQuestion);
    }
    askQuestion--;
  } while (askQuestion > 0);
  return alert(`Numbers divisible by 5 are ${numbersDivisibleBy5}.`);
};

numberMulipleOfFive();