
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About';
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PokemonDetails from './pages/PokemonDetails';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/pokemon/:id",
          element: <PokemonDetails />,
        },
      ],
    },
  ]);

  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App
