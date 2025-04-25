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
        gap: "15px",
      }}
    >
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};
export default FilmList;
