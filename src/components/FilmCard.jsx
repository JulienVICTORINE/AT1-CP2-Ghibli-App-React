// card pour afficher un film
import { useRef } from "react";
import { Link } from "react-router-dom";

const FilmCard = ({ film, toggleFavorite, favorites }) => {
  const starRef = useRef(null);
  const isFavorite = favorites.includes(film.id);

  const handleClick = (e) => {
    e.preventDefault(); // empêche la redirection
    toggleFavorite(film.id); // ajoute ou retire le favori
  };

  // animation
  if (starRef.current) {
    starRef.current.classList.add("animate");
    setTimeout(() => {
      starRef.current.classList.remove("animate");
    }, 300);
  }

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
        <span
          ref={starRef}
          className={`star ${isFavorite ? "active" : ""}`}
          onClick={handleClick}
        >
          {isFavorite ? "★" : "☆"}
        </span>
      </div>
    </Link>
  );
};

export default FilmCard;
