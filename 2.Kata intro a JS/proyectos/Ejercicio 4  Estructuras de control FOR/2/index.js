const pokemons = (limit) => {

  limit = prompt("Input the limit of pokemons: (only returns pokemos divisible by 5 )");

  let pokemonsArray =
    ['bulbasaur',
      'ivysaur',
      'venusaur',
      'charmander',
      'charmeleon',
      'charizard',
      'squirtle',
      'wartortle',
      'blastoise',
      'caterpie',
      'metapod',
      'butterfree',
      'weedle',
      'kakuna',
      'beedrill',
      'pidgey',
      'pidgeotto',
      'pidgeot',
      'rattata',
      'raticate',
      'spearow',
      'fearow',
      'ekans',
      'arbok',
      'pikachu',
      'raichu',
      'sandshrew',
      'sandslash',
      'nidoran-f',
      'nidorina',
      'nidoqueen',
      'nidoran-m',
      'nidorino',
      'nidoking',
      'clefairy',
      'clefable',
      'vulpix',
      'ninetales',
      'jigglypuff',
      'wigglytuff',
      'zubat',
      'golbat',
      'oddish',
      'gloom',
      'vileplume',
      'paras',
      'parasect',
      'venonat',
      'venomoth',
      'diglett',
      'dugtrio',
      'meowth',
      'persian',
      'psyduck',
      'golduck',
      'mankey',
      'primeape',
      'growlithe',
      'arcanine',
      'poliwag',
      'poliwhirl',
      'poliwrath',
      'abra',
      'kadabra',
      'alakazam',
      'machop',
      'machoke',
      'machamp',
      'bellsprout',
      'weepinbell',
      'victreebel',
      'tentacool',
      'tentacruel',
      'geodude',
      'graveler',
      'golem',
      'ponyta',
      'rapidash',
      'slowpoke',
      'slowbro',
      'magnemite',
      'magneton',
      'farfetchd',
      'doduo',
      'dodrio',
      'seel',
      'dewgong',
      'grimer',
      'muk',
      'shellder',
      'cloyster',
      'gastly',
      'haunter',
      'gengar',
      'onix',
      'drowzee',
      'hypno',
      'krabby',
      'kingler',
      'voltorb']
    let pokemonsDivisibleBy5 = [];
  for (let i = 0; i < limit; i++) {
    if (i % 5 == 0) {
      pokemonsDivisibleBy5.push(pokemonsArray[i]);
    };
  };
  return alert(`the next pokemons in the array are divisible by 5 ${pokemonsDivisibleBy5}`);
};

pokemons();