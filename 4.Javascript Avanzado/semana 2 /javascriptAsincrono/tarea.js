const stepDelay = (delay,step) => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(step);
      resolve(`${step}  completed successfully`);
    }, delay);
  });
};

