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
      <h1>Favorites</h1>
      <button onClick={getFavorites}>Get Favorites</button>
      {favorites.map((exercise) => {
        return (
          <div key={exercise.name}>
            <h3>{exercise.name}</h3>
            <p>{exercise.target}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;