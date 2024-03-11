
let userInput = Number(prompt("Enter a Number?"));
let res = []
do {
  res.push(userInput);
  userInput = Number(prompt("Enter a Number?"));
} while (0 < userInput);

console.log(res);

