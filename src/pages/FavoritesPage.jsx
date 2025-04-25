import FilmList from "../components/FilmList";

function FavoritesPage({ films, favorites, toggleFavorite }) {
  return (
    <div>
      <h2>Mes films favoris</h2>

      <FilmList
        films={films}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default FavoritesPage;
