import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, app, db } from './firebaseConfig';
import { useState } from "react";


function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const getFavorites = async () => {
        const q = query(collection(db, "favouriteExercises"), where("uid", "==", auth.currentUser.uid));
        const allFavorites = []; // Temporary array to hold all documents

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          allFavorites.push(doc.data());

        });

        setFavorites(allFavorites); 
        console.log(allFavorites);    
    }

  return (
    <div>
      <h1 className="text-center mt-5">Favorites</h1>
      <button onClick={getFavorites}>Get Favorites</button>
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