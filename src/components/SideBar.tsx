import { useContext } from "react";
import { SideBarContext } from "../context/SideBarContext";
import { Button } from "./Button";

export function SideBar() {
  const {
    selectedGenreId,
    handleClickButton, 
    genres
  } = useContext(SideBarContext)


  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
     </nav>
  )
}