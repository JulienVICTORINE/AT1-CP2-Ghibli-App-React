import { Link, NavLink } from "react-router-dom";
import "../Navbar.css";

// barre de navigation
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Ghibli App
      </Link>
      <NavLink to="/" end>
        Accueil
      </NavLink>
      <NavLink to="/favorites" end>
        Favoris
      </NavLink>
    </nav>
  );
}

export default Navbar;
