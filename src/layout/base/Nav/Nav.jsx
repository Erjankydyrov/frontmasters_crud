import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <ul className="navbar">
          <li className="navitem">
            <NavLink
              to="/"
              className={({ isActive }) =>
                [isActive ? "active" : ""] + ` navhref`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navitem">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                [isActive ? "active" : ""] + ` navhref`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
