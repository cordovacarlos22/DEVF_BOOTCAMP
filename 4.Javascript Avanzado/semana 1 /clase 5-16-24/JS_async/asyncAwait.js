// * fetching data : 

// ! 01 promesas 

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))



//! 02 async await 

const runProcess = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

runProcess();



