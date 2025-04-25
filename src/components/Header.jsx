import { useState } from "react";
import "../SearchBar.css";

const SearchBar = ({ films, setFilteredFilms }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = films.filter(
      (film) =>
        film.title.toLowerCase().includes(value) ||
        film.director.toLowerCase().includes(value)
    );
    setFilteredFilms(filtered);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Rechercher un film ou un réalisateur..."
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
