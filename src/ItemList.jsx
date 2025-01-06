import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import SearchBar from "./SearchBar";

import { getFavorites, handleRemoveFromFavorites, handleAddToFavorites, checkIfFavorite, handleSearchExerciseName } from './FirebaseUtils';


// ItemList component for displaying a list of exercises
function ItemList() {
  // State for managing the search term, list of exercises, and loading status
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercise] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [favoriteExercise, setFavoriteExercise] = useState(false);
  const [favorites, setFavorites] = useState([]);
  // Function to handle search and fetch data from the API

    const navigate = useNavigate();
  
  return (
    <div className="container">
      <div className="list-group">
        {isLoading && <LoadingSpinner></LoadingSpinner>}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        ></SearchBar>
        <button className="btn btn-dark" onClick={() => handleSearchExerciseName(setExercise, setIsLoading, searchTerm)}>
          Search
        </button>
        <div>
          <div className="container">
            <h1 className="text-center mt-5">Exercise List</h1>
            {exercises.map((exercise) => (
              <Link to={"/exercise/" + exercise.id}>
                <div className="card mb-4" key={exercise.id}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={exercise.gifUrl}
                        className="card-img"
                        alt={exercise.name}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{exercise.name}</h5>
                        <p className="card-text">
                          <strong>Body Part:</strong> {exercise.bodyPart}
                        </p>
                        <p className="card-text">
                          <strong>Target Muscle:</strong> {exercise.target}
                        </p>
                      </div>
                      <button
                        className="btn z-3 btn-link position-absolute top-0 end-0 m-2"
                        onClick={(e) => {
                          e.preventDefault();
                          checkIfFavorite(exercise.name, favorites) ? handleRemoveFromFavorites(exercise, setFavorites, favorites) : handleAddToFavorites(exercise, setFavorites, navigate);
                        }}
                      >
                        {checkIfFavorite(exercise.name, favorites) ? (
                          <img src="./images/favorite-fill.svg" alt="Remove from Favorites" width="24" height="24" />
                        ) : (

                          <img src="./images/favorite.svg" alt="Add to Favorites" width="24" height="24" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemList;
