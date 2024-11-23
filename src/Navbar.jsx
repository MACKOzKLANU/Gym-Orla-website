import { Link } from "react-router-dom";
import './App.css'; // Custom CSS for additional styles

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg pt-4">
            <div className="container-fluid">
                <Link to="/" className="brand text-decoration-none d-block d-lg-none fw-bold fs-1">
                    <img height={"50dp"} src="./images/logo.png" alt="LOGO" srcset="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul id="nav-length" className="navbar-nav justify-content-between border-top border-2 text-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link border-hover py-3 text-black">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/exercises" className="nav-link border-hover py-3 text-black">Exercises</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-link border-hover py-3 text-black">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link border-hover py-3 text-black">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link border-hover py-3 text-black">Contact Us</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link border-hover py-3 text-black">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" id="sign-in" className="nav-link my-2 px-4 text-black bg-danger">
                                <img className="me-3" height={"20dp"} src="./images/profile.png" alt="person-circle icon" />
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