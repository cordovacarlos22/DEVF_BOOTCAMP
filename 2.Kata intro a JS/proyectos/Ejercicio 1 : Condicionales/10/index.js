//! run script in your browser console

const majorCost = (c, d) => {

  const courses = {
    majorsName: {
      course: 'Course',
      carrera: 'Carrera',
      master: 'Master'
    },
    marjorsPrice: {
      course: 4999,
      carrera: 3999,
      master: 2999,
    },
    becaName: {
      facebook: 'Facebook',
      google: 'Google',
      jesua: 'Jesua'
    },
    becaPorcentance: {
      facebook: 20,
      google: 15,
      jesua: 50
    },
    masterlength: {
      course: 2,
      carrera: 6,
      master: 12,
    }
  }
  let courseName = courses.majorsName.course
  let carreraName = courses.majorsName.carrera
  let masterName = courses.majorsName.master
  let facebookBeca = courses.becaName.facebook
  let googleBeca = courses.becaName.google
  let jesuaBeca = courses.becaName.jesua

  // let courseDiscountFacebook = `${(courses.marjorsPrice.carrera * courses.becaPorcentance.facebook) / 100}`
  // let courseTotalCarrera = (courseDiscountFacebook * `${courses.masterlength.carrera}`).toFixed(2)


  //  console.debug(courseDiscount)
  //  console.debug(courseTotal)
  c = prompt('Elige un master : Course , Carrera , Master');
  if (c == carreraName || c == courseName || c == masterName) {


    d = prompt('Cuentas con una Beca : Facebook , Google , Jesua');

  } else {
    return alert("No Contamos con ese Master en este momento")
  }
  if (c == courseName) {
    // console.log('working course');
    if (d == facebookBeca) {
      let courseDiscountFacebook = `${(courses.marjorsPrice.course * courses.becaPorcentance.facebook) / 100}`
      let courseTotalCarreraFacebook = Number((courseDiscountFacebook * `${courses.masterlength.course}`).toFixed(2))
      return alert(`Elegiste ${courses.majorsName.course} como tu programa de estudio con un costo de $${courses.marjorsPrice.course} MXN  mesuales,como eres de becario de ${courses.becaName.facebook} obtiones un descuento de ${courses.becaPorcentance.facebook}% despues del descuento tu total a pagar por ${courses.masterlength.course} meses de estudio es de : $${courseTotalCarreraFacebook} MXN `);
    } else if (d == googleBeca) {
      let courseDiscountGoogle = `${(courses.marjorsPrice.course * courses.becaPorcentance.google) / 100}`
      let courseTotalCarreraGoogle = (courseDiscountGoogle * `${courses.masterlength.course}`).toFixed(2)
      return alert(`Elegiste ${courses.majorsName.course} como tu programa de estudio con un costo de $${courses.marjorsPrice.course} MXN  mesuales,como eres de becario de ${courses.becaName.google} obtiones un descuento de ${courses.becaPorcentance.google}% despues del descuento tu total a pagar por ${courses.masterlength.course} meses de estudio es de : $${courseTotalCarreraGoogle} MXN `);
    } else if (d == jesuaBeca) {
      let courseDiscountJesua = `${(courses.marjorsPrice.course * courses.becaPorcentance.jesua) / 100}`
      let courseTotalCarreraJesua = (courseDiscountJesua * `${courses.masterlength.course}`).toFixed(2)
      return alert(`Elegiste ${courses.majorsName.course} como tu programa de estudio con un costo de $${courses.marjorsPrice.course} MXN  mesuales,como eres de becario de ${courses.becaName.jesua} obtiones un descuento de ${courses.becaPorcentance.jesua}% despues del descuento tu total a pagar por ${courses.masterlength.course} meses de estudio es de : $${courseTotalCarreraJesua} MXN `);
    } else {
      let noDiscountCourse = `${courses.marjorsPrice.course}`
      let courseTotalCarreraNoDiscount = (noDiscountCourse * `${courses.masterlength.course}`).toFixed(2)
      return alert(`Elegiste ${courses.majorsName.course} como tu programa de estudio con un costo de $${courses.marjorsPrice.course} MXN  mesuales,como no eres parte de ninguna beca de estudios tu  total a pagar por ${courses.masterlength.course} meses de estudio es de : $${courseTotalCarreraNoDiscount} MXN `);
    }
  } else if (c == carreraName) {
    if (d == facebookBeca) {
      let courseDiscountFacebook = `${(courses.marjorsPrice.carrera * courses.becaPorcentance.facebook) / 100}`
      let courseTotalCarreraFacebook = Number((courseDiscountFacebook * `${courses.masterlength.carrera}`).toFixed(2))
      return alert(`Elegiste ${courses.majorsName.carrera} como tu programa de estudio con un costo de $${courses.marjorsPrice.carrera} MXN  mesuales,como eres de becario de ${courses.becaName.facebook} obtiones un descuento de ${courses.becaPorcentance.facebook}% despues del descuento tu total a pagar por ${courses.masterlength.carrera} meses de estudio es de : $${courseTotalCarreraFacebook} MXN `);
    } else if (d == googleBeca) {
      let courseDiscountGoogle = `${(courses.marjorsPrice.carrera * courses.becaPorcentance.google) / 100}`
      let courseTotalCarreraGoogle = (courseDiscountGoogle * `${courses.masterlength.carrera}`).toFixed(2)
      return alert(`Elegiste ${courses.majorsName.carrera} como tu programa de estudio con un costo de $${courses.marjorsPrice.carrera} MXN  mesuales,como eres de becario de ${courses.becaName.google} obtiones un descuento de ${courses.becaPorcentance.google}% despues del descuento tu total a pagar por ${courses.masterlength.carrera} meses de estudio es de : $${courseTotalCarreraGoogle} MXN `);
    } else if (d == jesuaBeca) {
      let courseDiscountJesua = `${(courses.marjorsPrice.carrera * courses.becaPorcentance.jesua) / 100}`
      let courseTotalCarreraJesua = (courseDiscountJesua * `${courses.masterlength.carrera}`).toFixed(2)
      return alert(`Elegiste ${courses.majorsName.carrera} como tu programa de estudio con un costo de $${courses.marjorsPrice.carrera} MXN  mesuales,como eres de becario de ${courses.becaName.jesua} obtiones un descuento de ${courses.becaPorcentance.jesua}% despues del descuento tu total a pagar por ${courses.masterlength.carrera} meses de estudio es de : $${courseTotalCarreraJesua} MXN `);
    } else {
      let noDiscountCourse = `${courses.marjorsPrice.carrera}`
      let courseTotalCarreraNoDiscount = (noDiscountCourse * `${courses.masterlength.carrera}`).toFixed(2)
      return alert(`Elegiste ${courses.majorsName.carrera} como tu programa de estudio con un costo de $${courses.marjorsPrice.carrera} MXN  mesuales,como no eres parte de ninguna beca de estudios tu  total a pagar por ${courses.masterlength.carrera} meses de estudio es de : $${courseTotalCarreraNoDiscount} MXN `);
    }

  } else if (c == masterName) {
    if (d == facebookBeca) {
      let courseDiscountFacebook = `${(courses.marjorsPrice.master * courses.becaPorcentance.facebook) / 100}`
      let courseTotalCarreraFacebook = Number((courseDiscountFacebook * `${courses.masterlength.master}`).toFixed(2))
      return alert(`Elegiste ${courses.majorsName.master} como tu programa de estudio con un costo de $${courses.marjorsPrice.master} MXN  mesuales,como eres de becario de ${courses.becaName.facebook} obtiones un descuento de ${courses.becaPorcentance.facebook}% despues del descuento tu total a pagar por ${courses.masterlength.master} meses de estudio es de : $${courseTotalCarreraFacebook} MXN `);
    } else if (d == googleBeca) {
      let courseDiscountGoogle = `${(courses.marjorsPrice.master * courses.becaPorcentance.google) / 100}`
      let courseTotalCarreraGoogle = (courseDiscountGoogle * `${courses.masterlength.master}`).toFixed(2)
      return alert(`Elegiste ${courses.majorsName.master} como tu programa de estudio con un costo de $${courses.marjorsPrice.master} MXN  mesuales,como eres de becario de ${courses.becaName.google} obtiones un descuento de ${courses.becaPorcentance.google}% despues del descuento tu total a pagar por ${courses.masterlength.master} meses de estudio es de : $${courseTotalCarreraGoogle} MXN `);
    } else if (d == jesuaBeca) {
      let courseDiscountJesua = `${(courses.marjorsPrice.master * courses.becaPorcentance.jesua) / 100}`
      let courseTotalCarreraJesua = (courseDiscountJesua * `${courses.masterlength.master}`).toFixed(2)
      return alert(`Elegiste ${courses.majorsName.master} como tu programa de estudio con un costo de $${courses.marjorsPrice.master} MXN  mesuales,como eres de becario de ${courses.becaName.jesua} obtiones un descuento de ${courses.becaPorcentance.jesua}% despues del descuento tu total a pagar por ${courses.masterlength.master} meses de estudio es de : $${courseTotalCarreraJesua} MXN `);
    } else {
      let noDiscountCourse = `${courses.marjorsPrice.master}`
      let courseTotalCarreraNoDiscount = (noDiscountCourse * `${courses.masterlength.master}`).toFixed(2)
      return alert(`Elegiste ${courses.majorsName.master} como tu programa de estudio con un costo de $${courses.marjorsPrice.master} MXN  mesuales,como no eres parte de ninguna beca de estudios tu  total a pagar por ${courses.masterlength.master} meses de estudio es de : $${courseTotalCarreraNoDiscount} MXN `);
    }
  } else {
    return alert('no efrecemos este master por el momento ');
  }


};

majorCost();

