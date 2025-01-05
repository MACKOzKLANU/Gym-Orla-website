import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { auth, app, db } from './firebaseConfig';
import { useEffect, useState } from "react";


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

  useEffect(() => {
    getFavorites();
  }, [])

  const handleRemoveFromFavorites = async (exercise) => {
    console.log(exercise);

    // Find the document in the collection that matches the exercise name and the user ID
    const q = query(
      collection(db, "favouriteExercises"),
      where("uid", "==", auth.currentUser.uid),
      where("name", "==", exercise.name)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (docSnapshot) => {
      console.log(docSnapshot.id, " => ", docSnapshot.data());

      // Get a DocumentReference using the doc's ID
      const docRef = doc(db, "favouriteExercises", docSnapshot.id);

      // Delete the document
      await deleteDoc(docRef);

      let tempFavorites = favorites.filter((fav) => fav.name !== exercise.name);
      setFavorites(tempFavorites);
    });
  };

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
                      handleRemoveFromFavorites(exercise)
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