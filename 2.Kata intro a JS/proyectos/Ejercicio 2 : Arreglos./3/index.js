const ascendingCompent = (menor, mayor) => {
  return (menor - mayor);
}


let numeros = [10, 40, 30, 20, 15, 5]

numeros.sort(ascendingCompent);

console.log(numeros)


const desendingComponent = (menor, mayor) => {
  return mayor - menor
}



numeros.sort(desendingComponent);

console.log(numeros)