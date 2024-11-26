import { Link } from "react-router-dom";
import "./App.css";

// Navbar component for site-wide navigation
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg pt-4">
      <div className="container-fluid">
        <Link
          to="/"
          className="brand text-decoration-none d-block d-lg-none fw-bold fs-1"
        >
          <img height={"50dp"} src="./images/logo.png" alt="LOGO" srcset="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul
            id="nav-length"
            className="navbar-nav justify-content-between border-top border-2 text-center"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link border-hover py-3 text-black">
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/exercises"
                className="nav-link border-hover py-3 text-black"
              >
                <span>Exercises</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pricing"
                className="nav-link border-hover py-3 text-black"
              >
                <span>Pricing</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link border-hover py-3 text-black"
              >
                <span>About Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link border-hover py-3 text-black"
              >
                <span>Contact Us</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/docs"
                className="nav-link border-hover py-3 text-black"
              >
                <span>Docs</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pageinprogress"
                id="sign-in"
                className="nav-link my-2 px-4 text-black bg-danger"
              >
                <img
                  className="me-3"
                  height={"20dp"}
                  src="./images/profile.png"
                  alt="person-circle icon"
                />
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
