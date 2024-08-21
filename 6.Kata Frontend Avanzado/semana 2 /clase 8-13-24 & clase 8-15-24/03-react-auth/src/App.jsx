import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import RoutesIndex from './routes/RoutesIndex'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
