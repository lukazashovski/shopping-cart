import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-logo">
          <span>'mart</span>
        </Link>
        <div className="nav-items">
          <Link to="/shop">
            <span>shop</span>
          </Link>
          <Link to="/about-us">
            <span>about us</span>
          </Link>
          <Link to="/cart">
            <span>cart</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
