import FilmList from "../components/FilmList";

function HomePage({ films, favorites, toggleFavorite }) {
  return (
    <div>
      <h1>Les films</h1>
      <FilmList
        films={films}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default HomePage;
