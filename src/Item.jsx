import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

// Item component for displaying exercise details
function Item() {
  // State for storing exercise data and loading status
  const [exercise, setExercise] = useState(null); // Change from array to null
  const [isLoading, setIsLoading] = useState(false);
  let params = useParams(); // Get route parameters

  // useEffect hook to fetch exercise data when component mounts or params.id changes
  useEffect(() => {
    fetchData();
  }, [params.id]); // Add dependency array to trigger fetch when ID changes

  // Function to fetch exercise data from the API
  const fetchData = async () => {
    setIsLoading(true);

    const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`;
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
      setExercise(result); // Set the exercise data here
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // Show loading spinner while data is being fetched
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Show message if no exercise data is found
  if (!exercise) {
    return <div>No exercise data found.</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">Exercise Details</h1>
      <div className="card mb-4">
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
                <strong>Equipment:</strong> {exercise.equipment}
              </p>
              <p className="card-text">
                <strong>Target Muscle:</strong> {exercise.target}
              </p>
              <p className="card-text">
                <strong>Secondary Muscles:</strong>{" "}
                {exercise.secondaryMuscles.join(", ")}
              </p>
              <h6>Instructions:</h6>
              <ol>
                {exercise.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
