import FilmCard from "./FilmCard";

// Liste des films
const FilmList = ({ films }) => {
  return (
    <div
      className="film-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};
export default FilmList;
