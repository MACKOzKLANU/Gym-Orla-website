import { collection, query, where, getDocs, doc, deleteDoc, addDoc } from "firebase/firestore";
import { auth, db } from './firebaseConfig';

// Fetch Favorites
export const getFavorites = async () => {
  if (!auth.currentUser) {
    console.error("User is not authenticated.");
    return [];
  }

  const q = query(collection(db, "favouriteExercises"), where("uid", "==", auth.currentUser.uid));
  const allFavorites = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    allFavorites.push({ id: doc.id, ...doc.data() }); // Include the document ID for easy removal
  });

  return allFavorites;
};

// Remove from Favorites
export const handleRemoveFromFavorites = async (exercise, setFavorites, favorites) => {
  if (!auth.currentUser) {
    console.error("User is not authenticated.");
    return;
  }

  try {
    const q = query(
      collection(db, "favouriteExercises"),
      where("uid", "==", auth.currentUser.uid),
      where("name", "==", exercise.name)
    );

    const querySnapshot = await getDocs(q);

    for (const docSnapshot of querySnapshot.docs) {
      console.log(docSnapshot.id, " => ", docSnapshot.data());

      const docRef = doc(db, "favouriteExercises", docSnapshot.id);
      await deleteDoc(docRef);

      // Update state
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.name !== exercise.name)
      );
    }
  } catch (error) {
    console.error("Error removing favorite:", error);
  }
};

// Add to Favorites
export const handleAddToFavorites = async (exercise, setFavorites, navigate) => {
  if (!auth.currentUser) {
    console.warn("User is not authenticated. Redirecting to sign-in page.");
    navigate('/signin');
    return;
  }

  try {
    console.log("Adding to favorites:", exercise);

    // Add a new document to Firestore
    const docRef = await addDoc(collection(db, "favouriteExercises"), {
      uid: auth.currentUser.uid,
      name: exercise.name,
      target: exercise.target,
      secondaryMuscles: exercise.secondaryMuscles,
      bodyPart: exercise.bodyPart,
      equipment: exercise.equipment,
      gifUrl: exercise.gifUrl,
      instructions: exercise.instructions,
    });

    console.log("Document written with ID:", docRef.id);

    // Update state
    setFavorites((prevFavorites) => [...prevFavorites, { id: docRef.id, ...exercise }]);
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
};

export const checkIfFavorite = (exerciseName, favorites) => {

  return favorites.some(exercise => exercise.name === exerciseName);
}

// Fetch exercises from the API based on the search term
export const handleSearch = async (setExercise, setFilteredExercises, searchTerm) => {
  console.log(searchTerm);

  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchTerm}`;
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
    if (result.length === 0) {
      setExercise(result);
      setFilteredExercises(result);
    } else {
      setExercise((prevExercises) => {
        const newExercises = [...prevExercises, ...result];
        setFilteredExercises(newExercises);
        return newExercises;
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const handleSearchExerciseName = async (setExercise, setIsLoading, searchTerm) => {
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

export const handleSubmit = async (name, email, message) => {
  
  // Add a new document with a generated id.
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
};
