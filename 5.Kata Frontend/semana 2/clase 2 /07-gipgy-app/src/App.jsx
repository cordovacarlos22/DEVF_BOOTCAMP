import { useState, useEffect } from 'react'
import './App.css'
import ImageCard from './components/ImageCard'
function App() {
  // ! creo el estato que se va a encargar de actualizar la lista de gifs
  const [gits, setGits] = useState([]);
  //! api key 
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  //! creo el efecto que se va a encargar de llamar a la API para traer los gifs
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setGits(result.data)
      }).catch(error => console.log(error))
  }, []);


  return (
    <>
      <div>
        <h1>Giphy App</h1>
        <div className="grid-cards">
          {
            gits && gits.map((item, index) => (
              <ImageCard
                key={item.id + (index + 1)}
                url={item.images.fixed_height.url}
                title={item.title}
              />
            ))
          }
        </div>
      </div>

    </>
  )
}

export default App
