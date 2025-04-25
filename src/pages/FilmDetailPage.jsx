import { useParams } from "react-router-dom";

function FilmDetailPage({ films }) {
  const { id } = useParams(); // récupère l'id du film depuis l'URL
  const film = films.find((f) => f.id == id); // récupère et trouve le film correspondant grâce à son ID

  // Si le film n'existe pas encore ou en cours de chargement
  if (!film) {
    return <div>Chargement...</div>;
  }

  // Conversion du score sur 100 en une note sur 5
  const rating = film.rt_score / 20;

  // Conversion de la durée en heures et minutes
  const hours = Math.floor(film.running_time / 60); // Récupère les heures
  const minutes = film.running_time % 60; // Récupère les minutes restantes

  return (
    <div>
      <h2>{film.title}</h2>
      <img src={film.image} alt={film.title} style={{ width: "200px" }} />
      <p>
        <strong>Réalisateur :</strong>
        <span> {film.director}</span>
      </p>
      <p>
        <strong>Année de sortie :</strong>
        <span> {film.release_date}</span>
      </p>
      <p>
        <strong>Description :</strong>
        <span> {film.description}</span>
      </p>
      <p>
        <strong>Producteur :</strong>
        <span> {film.producer}</span>
      </p>
      <p>
        <strong>Durée : </strong>
        <span>
          {hours}h {minutes}min
        </span>
      </p>

      <div className="film-rating">
        <strong>Note :</strong>
        <span> {rating} / 5</span>
      </div>
    </div>
  );
}

export default FilmDetailPage;
