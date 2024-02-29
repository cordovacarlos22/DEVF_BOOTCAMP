//! run script on browser console

const semesterGrades =  () => {

  const askUserForGrade = parseInt(prompt('Student Please Enter Your Grade For The Semester'));
  
  if (askUserForGrade >= 1 && askUserForGrade <= 10) {
    switch (askUserForGrade) {
      case 6:
      case 7:
      case 8:
        alert('regular 🙂')
        break;
      case 9:
        alert('bien 👍')
        break;
      case 10:
        alert('excente 👏')
        break;
      default:
        alert('reprobado 😕');
    }
  } else {
    alert('Enter a Grade between 1 - 10');
  };

};

semesterGrades()