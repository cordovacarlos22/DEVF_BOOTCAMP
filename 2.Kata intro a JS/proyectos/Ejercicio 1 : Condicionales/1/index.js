//! run this script in the browser window
const  youCute = () => {
  let askUser = prompt('¿Eres bellisimo/a? SI O NO  ')
  let yes = 'Ciertamente!';
  let no = 'No te creo!'

  if (askUser == 'si') {
    return yes
  } else {
    return no
  };
}

youCute();