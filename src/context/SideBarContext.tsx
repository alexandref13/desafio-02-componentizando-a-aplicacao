import { createContext, ReactNode, useEffect, useState } from "react";
import { GenreResponseProps } from "../App";
import { api } from "../services/api";

interface SideBarProviderProps {
  children: ReactNode
}

interface SideBarContextData {
  selectedGenreId: number;
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
}

export const SideBarContext = createContext({} as SideBarContextData)

export function SideBarProvider({children}: SideBarProviderProps){
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);


  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response  => {
      setGenres(response.data);
    });
  }, []);


  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }  

  return (
    <SideBarContext.Provider
      value={{
        selectedGenreId,
        genres,
        handleClickButton
      }}
    >
    {children}
  </SideBarContext.Provider>
  )
}