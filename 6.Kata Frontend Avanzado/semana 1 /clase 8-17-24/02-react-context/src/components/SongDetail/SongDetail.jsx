import React, { useContext } from 'react'
import './SongDetail.css'
import { SongContext } from '../../Context/useSongContext'

const SongDetail = () => {

  const songContext = useContext(SongContext)
  return (
    <div>

      {songContext.selectedSong}
    </div>
  )
}

export default SongDetail