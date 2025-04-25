import { Link, NavLink } from "react-router-dom";
import "../Navbar.css";

// barre de navigation
function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Ghibli App
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/favorites" end>
          Favoris
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
