// card pour afficher un film
import { Link } from "react-router-dom";
import "../FilmCard.css";

const FilmCard = ({ film, toggleFavorite }) => {
  const handleClick = (e) => {
    e.preventDefault();
    toggleFavorite(film.id);
  };
  return (
    <Link to={`/film/${film.id}`} className="film-link">
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
        <button className="favorite-button" onClick={handleClick}>
          &#9734;
        </button>
      </div>
    </Link>
  );
};

export default FilmCard;
