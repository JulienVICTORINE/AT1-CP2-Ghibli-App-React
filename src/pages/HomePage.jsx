import { useState, useEffect } from "react";
import FilmList from "../components/FilmList";
import SearchBar from "../components/Header";
import SortButtons from "../components/SortButtons";

function HomePage({ films, favorites, toggleFavorite }) {
  const [filteredFilms, setFilteredFilms] = useState([]);

  useEffect(() => {
    setFilteredFilms(films);
  }, [films]);

  const sortFilms = (criterion) => {
    const sorted = [...filteredFilms].sort((a, b) => {
      if (criterion == "score") {
        return parseInt(b.rt_score) - parseInt(a.rt_score);
      } else if (criterion == "release_date") {
        return parseInt(a.release_date) - parseInt(b.release_date);
      } else if (criterion == "title") {
        return a.title.localeCompare(b.title);
      } else {
        return 0;
      }
    });
    setFilteredFilms(sorted);
  };

  return (
    <div>
      <SearchBar films={films} setFilteredFilms={setFilteredFilms} />
      <SortButtons sortFilms={sortFilms} /> {/* Tri après la recherche */}
      <h1>Les films</h1>
      <FilmList
        films={filteredFilms}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default HomePage;
