import { Link } from "react-router-dom";

// PageInProgress component for displaying a page under construction message
function PageInProgress() {
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <img
            src="https://cdn.pixabay.com/animation/2023/05/04/20/32/20-32-16-61_512.gif"
            alt="Page in Progress"
            className="img-fluid mb-4"
          />
          <h1>Page in Progress</h1>
          <p>
            We're working hard to bring you new and exciting content. Please
            check back later!
          </p>
          <Link to="/" className="btn btn-dark">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PageInProgress;
