// card pour afficher un film
import "../FilmCard.css";

const FilmCard = ({ film }) => {
  return (
    <div className="film-card">
      <img src={film.image} alt={film.title} className="film-image" />
      <h2>{film.title}</h2>
      <p>
        <strong>Réalisateur :</strong>
        <span> {film.director}</span>
      </p>
      <p>
        <strong>Année :</strong>
        <span> {film.release_date}</span>
      </p>
    </div>
  );
};

export default FilmCard;
