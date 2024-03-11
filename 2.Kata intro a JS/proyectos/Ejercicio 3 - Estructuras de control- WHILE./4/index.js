let userInput= true;
let res = []
while(userInput) {
  userInput = prompt("Enter a Letter or Word?");
  if(  typeof userInput =='string' && userInput != '' ) {
    res.push(userInput);
};
};

console.log(...res);

