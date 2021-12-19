import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { GenreResponseProps, MovieProps } from "../App";
import { api } from "../services/api";
import { SideBarContext } from "./SideBarContext";

interface ContentProviderProps {
  children: ReactNode
}


interface ContentContextData {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export const ContentContext = createContext({} as ContentContextData)

export function ContentProvider({children}: ContentProviderProps){

  const { selectedGenreId } = useContext(SideBarContext)

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);


  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return(
    <ContentContext.Provider
      value={{
        movies,
        selectedGenre
      }}
    >
      {children}
    </ContentContext.Provider>
  )

}

