import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { auth, app, db } from './firebaseConfig';
import { useEffect, useState } from "react";
import { getFavorites, handleRemoveFromFavorites } from './FirebaseUtils';
import { onAuthStateChanged } from "firebase/auth";


function Favorites() {
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesList = await getFavorites();
      setFavorites(favoritesList);
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchFavorites();
      }
    });

  }, []);

  return (
    <div>
      <h1 className="text-center mt-5">Favorites</h1>
      {/* <button onClick={getFavorites}>Get Favorites</button> */}
      {favorites.map((exercise) => {
        return (
          <div className="container">
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
                  <button
                    className="btn z-3 btn-link position-absolute top-0 end-0 m-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveFromFavorites(exercise, setFavorites, favorites);
                    }}
                  >
                    <img src="./images/favorite-fill.svg" alt="Add to Favorites" width="24" height="24" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;