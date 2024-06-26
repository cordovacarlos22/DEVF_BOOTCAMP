import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const handleInput = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      {/* <></> => se conoce como react.fragmet tambien se puede usar <React.Fragment></React.Fragment> */}
      <input type="text" onChange={handleInput} />
      <h1>Hola {name} </h1>
    </>
  )
}

export default App
