import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          Health<span>Aware</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/topics">Topics</NavLink>
          <NavLink to="/campaigns">Campaigns</NavLink>
          <NavLink to="/tips">Tips</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/resources">Resources</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;  