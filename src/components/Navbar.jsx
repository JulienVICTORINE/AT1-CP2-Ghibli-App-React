import { Link, NavLink } from "react-router-dom";

// barre de navigation
function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Ghibli App
      </Link>
      <nav className="nav-links">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/favorites" end>
          Favoris
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
