//! 1. crear el contexto 

import { createContext, useEffect, useState } from "react";
 import listaDeCanciones from '../assets/listaCanciones.json'
const SongContext = createContext();

//! 2. crear el provider (provider)
const SongProvider = ({ children }) => {
  const [songList, setSongList] = useState([]);
  const [selectedSong, setSelectedSong] = useState('');
  const [loading,setLoading]  = useState(true)

  // ? simulando una petición a una api

  useEffect(() => {
    setTimeout(() => {
      setSongList(listaDeCanciones)
      setLoading(false)
    },3000)
  },[])

  const data = {
    songList,
    selectedSong,
    setSelectedSong,
    loading
  }

  return (
    <SongContext.Provider
      value={data}
    >
      {children}
    </SongContext.Provider>
  )
};

export { SongContext, SongProvider }