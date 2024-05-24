let characterName = document.querySelector('.character-name');
let image = document.querySelector('.character-image');
let container = document.querySelector('#container');
let ramdomContainer = document.querySelector('.ramdom');
let ramdomBtn = document.querySelector('.random_Btn');

// feching data 

const fectchData = async () => {
  try {
    let response = await fetch('https://rickandmortyapi.com/api/character');
    let data = await response.json();
    data = data.results
    let characters = [];
    characters.push(data)

    /* The `console.log(characters);` statement is logging the `characters` array to the console. This
    array contains the data fetched from the API endpoint
    'https://rickandmortyapi.com/api/character'. The data is stored in the `characters` array after
    processing it from the response JSON. This statement helps in debugging and understanding the
    structure of the data fetched from the API. */
    console.log(...characters[0]);

    characters[0].map((character) => {
      container.innerHTML += ` 
         <h1 class="character-name">${character.name}</h1>
         <img class="character-image" src="${character.image}" alt="${character.name}">
      `



    })

    ramdomBtn.addEventListener('click', () => {

      randomNumber = Math.floor(Math.random() * characters[0].length);
      console.log(randomNumber);
      console.log(characters[0][randomNumber]);

      ramdomContainer.innerHTML += `
      <h1>${characters[0][randomNumber].name}</h1>
      <img class="character-image" src="${characters[0][randomNumber].image}" alt="${characters[0][randomNumber].name}">
      `

    })



  } catch (error) {
    console.log(error.message);
  }
};

fectchData();



