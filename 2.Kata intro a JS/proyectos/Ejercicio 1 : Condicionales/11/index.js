// run scrip in your browser console

const tollWayPrice = (km, vehicle) => {
   km = Number(prompt('Ingresar el total de KM recorridos'));
   vehicle = prompt('Intresar tipo de vehiculo: coche , moto , autobus ')

  let total = 0;

  const tollway = {
    price: {
      cochePrice: 0.20,
      motoPrice: 0.10,
      autobusPrice: 0.5
    },
    vehicleType: {
      coche: 'coche',
      moto: 'moto',
      autobus: 'autobus'
    }
  };

  let coche = tollway.vehicleType.coche;
  let moto = tollway.vehicleType.moto;
  let autobus = tollway.vehicleType.autobus;


  if (km >= 0 && km <= 100) {
    if (vehicle == coche) {
      total = (km * tollway.price.cochePrice) + 5;
      return alert(`total a pagar es de : $${total}`);
    } else if (vehicle == moto) {
      total = (km * tollway.price.motoPrice) + 5;
      return alert(`total a pagar es de : $${total}`);
    } else if (vehicle == autobus) {
      total = (km * tollway.price.autobusPrice) + 5;
      return alert(`total a pagar es de : $${total}`);
    } else {
      return  alert('Lo sentimos por favor ir a caceta con presentante');
    }
  } else {
    if (vehicle == coche) {
      total = (km * tollway.price.cochePrice) + 10;
      return alert(`total a pagar es de : $${total}`);
    } else if (vehicle == moto) {
      total = (km * tollway.price.motoPrice) + 10;
      return alert(`total a pagar es de : $${total}`);
    } else if (vehicle == autobus) {
      total = (km * tollway.price.autobusPrice) + 10;
      return alert(`total a pagar es de : $${total}`);
    } else {
      return alert( 'Lo sentimos por favor ir a caceta con presentante');
    };
  };
};

tollWayPrice();


