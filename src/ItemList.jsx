import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import SearchBar from "./SearchBar";

// ItemList component for displaying a list of exercises
function ItemList() {
  // State for managing the search term, list of exercises, and loading status
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercise] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle search and fetch data from the API
  const handleSearch = async () => {
    if (searchTerm !== "") {
      setIsLoading(true);
      console.log(searchTerm);

      const url = `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "bca5f95627mshc8dcc16a3c6a234p1cb1a5jsna0e703d7deb6",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setExercise(result);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);

      }
    }
  };
  return (
    <div className="container">
      <div className="list-group">
        {isLoading && <LoadingSpinner></LoadingSpinner>}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        ></SearchBar>
        <button className="btn btn-dark" onClick={handleSearch}>
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
