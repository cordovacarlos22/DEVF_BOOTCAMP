const numberToText = require('number-to-text')
require('number-to-text/converters/en-us');

/* This code snippet is using the Node.js built-in module `readline` to create an interface for reading
input from the user via the command line. Here's a breakdown of what the code is doing: */
const readline = require('readline');
const userInput = readline.createInterface(
  process.stdin, process.stdout);

userInput.setPrompt(`Ingresa un numero para convertiuserInputo a texto? `);
userInput.prompt();
userInput.on('line', (ask) => {

  /* The line `let numberOne = numberToText.convertToText(ask);` is converting the user input number,
  which is represented as a string in the variable `ask`, into its textual representation using the
  `number-to-text` module. The `convertToText()` function from the module is being called with the
  user input as an argument, and the result of this conversion is stored in the variable
  `numberOne`. This allows the program to display the user's input number in text form using the
  `number-to-text` conversion functionality. */
  let numberOne = numberToText.convertToText(ask);
 /* The line `console.info(`Tu numero en texto es : `)` is outputting a message to the
 console. Specifically, it is displaying the text "Tu numero en texto es :" followed by the textual
 representation of the user input number stored in the variable `numberOne`. The ``
 syntax is used to insert the value of the `numberOne` variable into the string for display. */
  console.info(`Tu numero en texto es : ${numberOne}`)
  
  
 /* `userInput.close();` is a method call that is used to close the readline interface created with
 `readline.createInterface()`. This method is typically called when you want to stop listening for
 input from the user and close the interface, freeing up system resources. In this specific code
 snippet, `userInput.close();` is being called after converting the user input number to text,
 indicating that the input process is complete and the interface can be closed. */
  userInput.close();
});


