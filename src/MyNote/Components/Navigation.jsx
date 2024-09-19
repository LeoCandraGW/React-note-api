import React from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { IoMdLogOut } from "react-icons/io";
import { ThemeProvider } from "../Contexts/ThemeContext";
import PropTypes from "prop-types";

function Navigation({ logout, name }) {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const themeContextValue = { theme, toggleTheme };
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/all-note" className="navbar-link">
            All Note
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/add-note" className="navbar-link">
            Create Note
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/search-note" className="navbar-link">
            Search Note
          </Link>
        </li>
        <li className="navbar-item">
          <ThemeProvider value={themeContextValue}>
            <ToggleTheme />
          </ThemeProvider>
        </li>
        <li className="navbar-item">
          <button onClick={logout}>
            {name} <IoMdLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
