import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Nav.scss";

export const Nav = () => {
  return (
    <nav className="nav__container">
      <NavLink className="nav__logo" to="/">
        <img className="nav__img" src={logo} alt="logo" />
      </NavLink>
      <ul className="nav__ul">
        <NavLink className="nav__links" to="/">
          Home
        </NavLink>
        <NavLink className="nav__links" to="/projects">
          Projects
        </NavLink>
      </ul>
    </nav>
  );
};
