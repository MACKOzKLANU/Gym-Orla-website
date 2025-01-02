import { Link } from "react-router-dom";
import "./App.css";
import { auth, app } from './firebaseConfig';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
// Navbar component for site-wide navigation

function Navbar() {
  const [user, setUser] = useState(false)
  // var isLoggedIn = auth.currentUser;


  auth.onAuthStateChanged(function(userLoggedIn) {
    if (userLoggedIn) {
      setUser(true)
      // User is signed in.
    } else {
      setUser(false)
      // No user is signed in.
    }
  });
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
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/exercises"
                className="nav-link border-hover py-3 text-black"
              >
                <p>Exercises</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pricing"
                className="nav-link border-hover py-3 text-black"
              >
                <p>Pricing</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link border-hover py-3 text-black"
              >
                <p>About Us</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link border-hover py-3 text-black"
              >
                <p>Contact Us</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/docs"
                className="nav-link border-hover py-3 text-black"
              >
                <p>Docs</p>
              </Link>
            </li>
            <li className="nav-item">

              {(user) ? (
                <Link
                  to="/signin"
                  onClick={() => signOut(auth)}
                  id="sign-in"
                  className="nav-link my-2 px-4 text-black bg-danger"
                >
                  <img
                    className="me-3"
                    height={"20dp"}
                    src="./images/profile.png"
                    alt="person-circle icon"
                  />
                  Sign out
                </Link>
                
              ) : (
                <Link
                  to="/signin"
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
              )}


            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
