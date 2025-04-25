import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmDetailPage from "./pages/FilmDetailPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const url = "https://ghibliapi.vercel.app/films";
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    // Chargement initial depuis localStorage
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  }); // état pour les films en favoris

  const getMovies = async () => {
    const request = await fetch(url);
    const data = await request.json();
    console.log("Données films attendues", data);
    setFilms(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    // À chaque changement de favorites -> mettre à jour localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (filmId) => {
    if (favorites.includes(filmId)) {
      setFavorites(favorites.filter((id) => id !== filmId));
    } else {
      setFavorites([...favorites, filmId]);
    }
  };

  return (
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
  );
}

export default App;
