import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmDetailPage from "./pages/FilmDetailPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const url = "https://ghibliapi.vercel.app/films";
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]); // état pour les fils en favoris

  const toggleFavorite = (filmId) => {
    if (favorites.includes(filmId)) {
      setFavorites(favorites.filter((id) => id !== filmId));
    } else {
      setFavorites([...favorites, filmId]);
    }
  };

  const getMovies = async () => {
    const request = await fetch(url);
    const data = await request.json();
    console.log("Données films attendues", data);
    setFilms(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  films={films}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/film/:id"
              element={
                <FilmDetailPage
                  films={films}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavoritesPage
                  films={films.filter((f) => favorites.includes(f.id))}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
