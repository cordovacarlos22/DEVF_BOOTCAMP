/**
 * The code defines a function that returns a promise which resolves after a 2-second delay, and an
 * async function that calls this promise and logs the result.
 * @returns The `resolveAfter` function returns a Promise that resolves with the string "Resulto" after
 * a 2-second delay. The `asyncCall` function calls `resolveAfter` using `await` and logs the result to
 * the console if the Promise is resolved successfully.
 */
//! promesas 


const resolveAfter = () => {

  return new Promise((resolve, reject) => {
    let valor = true;
    setTimeout(() => {
      return valor ? resolve("Resulto") : reject("Rechasado");
    }, 2000)
  })
}



const asyncCall = async () => {
  try {
    console.log('llamando a la promesa')
    const result = await resolveAfter();
    console.log(result);
  } catch (error) {
    console.log(error)
  }
}

asyncCall();
