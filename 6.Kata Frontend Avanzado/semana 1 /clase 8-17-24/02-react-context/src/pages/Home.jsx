import SongDetail from "../components/SongDetail/SongDetail"
import SongList from "../components/SongList/SongList"
import { SongProvider } from "../Context/useSongContext"
import './Home.css'

const Home = () => {
  return (
    <>
      <SongProvider>
        <div className="home-container">

          <div className="izquierdo">
            <SongList />

          </div>
          <div className="derecho">
            <SongDetail />

          </div>
        </div>
      </SongProvider>

    </>
  )
}

export default Home