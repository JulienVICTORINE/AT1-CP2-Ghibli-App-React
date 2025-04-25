import FilmCard from "./FilmCard";

// Liste des films
const FilmList = ({ films, favorites, toggleFavorite }) => {
  return (
    <div
      className="film-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "2rem",
        gap: "10px",
      }}
    >
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          iSFavorite={favorites.includes(film.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};
export default FilmList;
