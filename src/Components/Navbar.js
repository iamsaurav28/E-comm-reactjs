import "../styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navigation-bar">
      <span className="navigation-bar-logo">
        SAADGI ZON
      </span>
      <nav>
        <ul className="navigation-bar-links">
          <li className="color-white">
            <Link to="/edit">
            </Link>
          </li>
          <li>
            <button className="icon-btn-badge">
              <Link to="/">
                Home
              </Link>
            </button>
          </li>
          <li>
            <button className="icon-btn-badge">
              <Link to="productlisting">
                Products
              </Link>
            </button>
          </li>
          <li>
            <button className="icon-btn-badge">
              <Link to="wishlist">
            Wishlist
              </Link>
            </button>
          </li>
          <li>
            <button className="icon-btn-badge">
              <Link to="cart">
               Cart
              </Link>
            </button>
          </li>        
              <li
              className="color-white"
            >
              Logout
            </li>
        </ul>
      </nav>
    </div>
  );
}
