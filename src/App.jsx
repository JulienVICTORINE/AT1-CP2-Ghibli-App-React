import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import FilmList from "./components/FilmList";

function App() {
  const url = "https://ghibliapi.vercel.app/films";
  const [films, setFilms] = useState([]);

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
    <div className="App">
      <Navbar />
      <main>
        <h1>Ghibli App - Vidéothèque</h1>
        <FilmList films={films} />
      </main>
    </div>
  );
}

export default App;
