/**
 * The function `makeCake` uses asynchronous JavaScript to simulate the steps involved in baking a cake
 * with specific delays for each step.
 * @param delay - The `delay` parameter in the `stepDelay` function represents the amount of time in
 * milliseconds to wait before executing the next step in the asynchronous process. It determines the
 * duration of the delay before moving on to the next step in the sequence.
 * @param step - The `step` parameter in the `stepDelay` function represents the step or task in the
 * process of making a cake. It is a description of what is happening at that particular step, such as
 * "Bought Ingredients" or "Mixing Ingredients". Each step is logged to the console after a
 * @returns The `makeCake` function is an asynchronous function that creates a cake by simulating
 * different steps involved in the process with delays. It returns a Promise that resolves when the
 * entire cake-making process is completed successfully.
 */
const stepDelay = (delay, step) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(step);
      resolve();
    }, delay);
  });
};

const makeCake = async () => {
  try {
    await stepDelay(5000, '1.  Bought Ingredients');
    await stepDelay(2000, '2.  preping Ingredients');
    await stepDelay(3000, '3.  Mixing Ingredients');
    await Promise.all(
      [
        await stepDelay(4000, '4. Pre-heating Hoven'),
        await stepDelay(5000, '5.  Baking')
      ]
    )

    await stepDelay(2000, 'Cake its ready to be served');

    console.log(` completed successfully `);
  } catch (error) {
    console.log(error);
  }
}


makeCake();