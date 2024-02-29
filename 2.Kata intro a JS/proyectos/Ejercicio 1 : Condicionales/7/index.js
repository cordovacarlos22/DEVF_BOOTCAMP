const sms = () => {

  let askUserSms = prompt('Enter any day of the week');
  switch (askUserSms) {
    case 'lunes':
      alert('es lunes feliz inicio de semana 😐');
      break;
    case 'viernes':
      alert('Feliz viernes ya es ultimo dia de trabajo 🥳');
      break;
    case 'sabado':
    case 'domingo':
      alert('feliz fin de semana 🎉 ')
      break;
    default:
      alert('tu puedes gurrero 💪 ');
      break;
  };
};

sms()