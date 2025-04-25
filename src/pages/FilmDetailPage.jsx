import { useParams } from "react-router-dom";

function FilmDetailPage({ films }) {
  const { id } = useParams();
  const film = films.find((f) => f.id == id);

  return (
    <div>
      <h2>{film.title}</h2>
      <img src={film.image} alt={film.title} style={{ width: "200px" }} />
      <p>
        <strong>Réalisateur :</strong>
        <span> {film.director}</span>
      </p>
      <p>
        <strong>Année :</strong>
        <span> {film.release_date}</span>
      </p>
      <p>
        <strong>Description :</strong>
        <span> {film.description}</span>
      </p>
    </div>
  );
}

export default FilmDetailPage;
