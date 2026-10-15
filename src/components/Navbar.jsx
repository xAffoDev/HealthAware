import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Health<span>Aware</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/campaigns">Campaigns</Link>
          <Link to="/tips">Tips</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/resources">Resources</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;  