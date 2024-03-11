const app = () => {
  let array = [4,"dos", 8,"tres", 5, 9, 1,"cero"]
   array.forEach((element) =>{
    if (typeof element === "number") {
      console.log(element);
    };
   });
};

app();