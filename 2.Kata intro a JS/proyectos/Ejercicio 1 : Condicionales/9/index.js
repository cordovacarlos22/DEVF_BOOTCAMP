const iceCreamPrice = (t) =>{
  const toppings = [
    {
      topping: 'oreo',
      price: 10
    },
    {
      topping: 'KitKat',
      price: 15
    }, {
      topping: 'brownie',
      price: 20
    },
    {
      topping: 'sin topping',
      price:50
    }
  ]

  if (t === toppings[0].topping){
    return alert( `El topping de ${toppings[0].topping} cuesta ${toppings[0].price} MXN.`);
  }else if (t === toppings[1].topping){
    return alert(`El topping de ${toppings[1].topping} cuesta ${toppings[1].price} MXN.`);
  }else if (t === toppings[2].topping){
    return alert(`El topping de ${toppings[2].topping} cuesta ${toppings[2].price} MXN.`);
  }else {
    return alert(`no tenemos este topping, lo sentimos su total es ${toppings[3].price} MXN por un helado ${toppings[3].topping}`);
  }

};

iceCreamPrice('brownie');



