import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-logo">
          <span>sknmart</span>
        </Link>
        <div className="nav-items">
          <Link to="/shop">
            <span>shop</span>
          </Link>
          <Link to="/about-us">
            <span>about us</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
