import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const PokemonDetail = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  //
  useEffect((() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
      .catch(error => console.error(error))
  }), [id])

  if (!pokemon) {
    return <h1>Buscando...</h1>
  }
  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{pokemon?.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon?.name} className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemon?.stats.map(stat => (
                    <tr key={stat.stat.name}>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PokemonDetail