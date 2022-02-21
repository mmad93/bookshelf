import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>My Bookshelf</h1>
      <div className="links">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
