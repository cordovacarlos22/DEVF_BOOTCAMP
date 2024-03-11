let dayOfTheWeek = true

while (dayOfTheWeek){
  dayOfTheWeek = prompt("Enter day of the week?");
  
    switch (dayOfTheWeek) {
    case 'lunes':
      alert('es lunes feliz inicio de semana 😐');
      break;
    case 'viernes':
      alert('Feliz viernes ya es ultimo dia de trabajo 🥳');
      break;
    case 'sabado':
    case 'domingo':
        alert('Ve a descansar🎉 ')
      dayOfTheWeek = false;
      break;
    default:
      alert('tu puedes gurrero 💪 ');
      break;
  };
  };