import React, { useContext } from 'react'
import './SongList.css'
import { SongContext } from '../../Context/useSongContext'


// ! 3. acceder a la informacion compartida del contexto 
const SongList = () => {

  const songContext = useContext(SongContext);
  return (
    <div>
      {songContext.loading ? 'Loading...' : (
        <ul>
          {
            songContext.songList.map((song, index) => {
              return (<li key={index}>
                Canción: {song.title}
                Artista: {song.artist}
                <button onClick={() => { songContext.setSelectedSong(song.title) }}>Reproducir</button>
              </li>)
            }
            )
          }
        </ul>
      )}

    </div>
  )
}

export default SongList