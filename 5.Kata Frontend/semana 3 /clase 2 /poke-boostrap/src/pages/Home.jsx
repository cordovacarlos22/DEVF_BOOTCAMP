import { useEffect, useState } from "react"

const Home = () => {

  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
      .catch(error => console.error('Error:', error));
  }, []);


  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  }

  );

  return (
    <div className="container">
      <h1>Home</h1>

      <div className="form inline my-2 w-100">
        <input
          type="text"
          id="search"
          className="form-control "
          placeholder="Ingresa el pokemon que desea buscar"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      <div className="row">
        {
          filteredPokemons.map((pokemon) => (
            <div
              key={pokemon.name}
              className="col-sm-4 mb-4"
            >
              <div className="card">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}

                  alt={pokemon.name}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                  >
                    {pokemon.name}
                  </h5>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home