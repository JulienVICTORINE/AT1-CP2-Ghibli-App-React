function SortButtons({ sortFilms }) {
  return (
    <div className="sort-buttons">
      <button onClick={() => sortFilms("title")}>Trier par Titre</button>
      <button onClick={() => sortFilms("release_date")}>Trier par Date</button>
      <button onClick={() => sortFilms("score")}>Trier par Score</button>
    </div>
  );
}

export default SortButtons;
